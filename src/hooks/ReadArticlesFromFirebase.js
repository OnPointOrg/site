import React, { Component } from 'react';
import firebase from 'firebase'
import firestoreDatabase from '../firebase/config';
import { Heading } from '@chakra-ui/core';

const getDocs = () => {
    firestoreDatabase.collection("articles").get().then((querySnapshot) => {
        console.log("All Articles From Firebase");
        console.log("---------------------------------------------------");
        querySnapshot.forEach((doc) => {
            console.log(doc.id + ' ========== ' + doc.data());
            const article = doc.data();
            console.log(article.title);
            console.log(article.category);
            console.log(article.user);
            console.log(article.content.blocks[0].type)
            console.log(article.content.blocks[0].data.text)
            const contentType = article.content.blocks[0].type
            const content = article.content.blocks[0].data.text
            // if (contentType === 'paragraph') {
            //     createElement('Text', content);
            //     console.log(createElement('Text', content))
            // } else {
            //     console.log('Unable To Create Element!')
            // }

            switch(content) {
                case "paragraph":
                    createElement(contentType, content)
                    break;
                case "header":
                    createElement(contentType, content)
            }
        });
    });
}

const createElement = (type, content) => {
    return (
        `<${type}>${content}</${type}>`
    )
}




export default getDocs;