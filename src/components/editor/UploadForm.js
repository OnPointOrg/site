import React, { useEffect, useState } from 'react';
import useStorage from '../../hooks/useStorage';

import { FiUpload } from 'react-icons/fi';

import {
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  Progress
} from '@chakra-ui/core';

// import placeholderimage from "../../images/placeholderimage.jpg";

export let fileURL =
  'https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/placeholder.jpg?alt=media&token=d818ce78-464a-4993-9f53-ee459d135d29';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file, 'ArticleThumbnail');

  useEffect(() => {
    if (url) {
      setFile(null);
    }
    fileURL = url;
  }, [url, setFile]);

  return <Progress hasStripe className="progress-bar" value={progress} />;
};

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    console.log('changed');

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      console.log(selected.name);
      setError('');
    } else {
      setFile(null);
      setError('Please Select An Allowed Image File(.png, .jpg, .jpeg, .gif)');
    }
  };

  return (
    <div>
      <Flex align="center" justify="center">
        <FormControl isRequired margin="25px">
          <FormLabel>Upload A Thumbnail For Your Article</FormLabel>
          <InputGroup>
            <Button
              rightIcon={FiUpload}
              variant="outline"
              onClick={handleClick}
              onChange={changeHandler}
              width="400px"
            >
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={hiddenFileInput}
              />
              Upload Thumbnail File
            </Button>
          </InputGroup>
        </FormControl>
      </Flex>
      <div className="output">
        {file && <ProgressBar file={file} setFile={setFile} />}
        {error && (
          <Text textAlign="center" color="tomato">
            {error}
          </Text>
        )}
        {file && <Text textAlign="center">File Uploading: {file.name}</Text>}
      </div>
    </div>
  );
};

export default UploadForm;
