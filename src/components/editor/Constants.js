import Embed from '@editorjs/embed';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import ImageTool from '@editorjs/image';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';

import urlMetadata from 'url-metadata';
import {
   projectStorage,
   firestoreDatabase,
   timestamp
} from '../../firebase/config';

let imageUrl = '';

export const EDITOR_JS_TOOLS = {
   embed: Embed,
   marker: Marker,
   list: List,
   warning: Warning,
   code: Code,
   linkTool: {
      class: LinkTool,
      config: {
         endpoint: (link) => {
            urlMetadata(link).then((metadata) => {
               console.log(metadata);
               return {
                  success: 1,
                  link: link,
                  meta: {
                     title: metadata.title,
                     site_name: metadata['og:site_name'],
                     description: metadata.description,
                     image: {
                        url: metadata.image
                     }
                  }
               };
            });
         }
      }
   },
   header: Header,
   quote: Quote,
   delimiter: Delimiter,
   inlineCode: InlineCode,
   image: {
      class: ImageTool,
      config: {
         uploader: {
            uploadByFile(file) {
               const storageRef = projectStorage.ref(
                  `ContentImage/` + file.name
               );
               const collectionRef = firestoreDatabase.collection('images');

               storageRef.put(file).on('state_changed', async () => {
                  const url = await storageRef.getDownloadURL();
                  const createdAt = timestamp();

                  collectionRef.add({ url, createdAt }).then(() => {
                     console.log('---- IMAGE INSIDE THEN ----');
                     console.log(url);
                     console.log(typeof url);
                     imageUrl = url;
                  });
               });
               return {
                  success: 1,
                  file: {
                     url: imageUrl
                  }
               };
            }
         }
      }
   }
};
