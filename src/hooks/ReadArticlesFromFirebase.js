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
            // console.log(article.title);
            // console.log(article.category);
            // console.log(article.user);
            // console.log(article.content.blocks[0].type)
            // console.log(article.content.blocks[0].data.text)

            let contentBlockLength = article.content.blocks.length;
            for (let i = 0; i < contentBlockLength; i++) {
                const contentType = article.content.blocks[i].type
                const content = article.content.blocks[i].data.text

                switch (contentType) {  
                    case "paragraph":
                        console.log("-----Element-----")
                        console.log(createElement('Text', content))
                    case "header":
                        createElement('Heading', content)
                        break;
                    case "list":
                        createElement('List', content)
                        console.log("-----Element-----")
                        console.log(createElement('List', content))
                }
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