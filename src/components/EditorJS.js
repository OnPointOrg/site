import React, { Component } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/editorjs';
import List from '@editorjs/editorjs';

const editorjs = new EditorJS({

    holder: 'editorjs',

    tools: {
        header: {
            class: Header,
            inlineToolbar: ['link']
        },
        list: {
            class: List,
            inlineToolbar: true
        }
    },
});


export class Editorjs extends Component {
    render() {
        return (
            { editorjs }
        )
    }
}

export default EditorJS