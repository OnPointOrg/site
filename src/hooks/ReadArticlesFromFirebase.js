import React, { Component } from 'react';
import firebase from 'firebase'
import firestoreDatabase from '../firebase/config';
import { Heading, List } from '@chakra-ui/core';

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

            let contentBlockLength = article.content.blocks.length;
            for (let i = 0; i < contentBlockLength; i++) {
                const contentType = article.content.blocks[i].type


                switch (contentType) {  
                    case "paragraph":
                        const paragraphText = article.content.blocks[i].data.text
                        console.log("-----Element-----")
                        console.log(createElement('Text', paragraphText))
                    case "header":
                        const headerText = article.content.blocks[i].data.text
                        createElement('Heading', headerText)
                    case "list":
                        const items = article.content.blocks[i].data.items
                        const allItems = [];
                        for(let j = 0; j < items.length; j++) {
                            allItems.push(createElement('ListItem', items[j]));
                            console.log(createElement('ListItem', items[j]))
                        }

                        const listArray = []

                        createElement('List', allItems.join(""))
                        console.log("-----Element-----")
                        console.log(createElement('List', allItems.join("")))

                    case "warning":
                        const warningText = article.content.blocks[i].data.message
                        const warningTitle = article.content.blocks[i].data.title
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