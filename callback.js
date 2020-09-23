'use strict';

const posts=[
    {'title' : 'Post One', 'body' : 'This is post one'},
    {'title' : 'Post Two', 'body' : 'This is post two'},
];

function getPosts(){
    setTimeout(()=> {
        let output='';
        posts.forEach((post, index)=>{
            output+=`<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    }, 1000)
}

function removeFristElement(){
    posts.shift();
}

function modifyThirdElement(){
    posts[2].title.replace('Three', 'Four');
}

function createPost(post, callback_1, callback_2, callback_3){
    setTimeout(()=>{
        posts.push(post);
        callback_1();
        callback_2();
        callback_3();
    }, 2000);
}

createPost({'title' : 'Post Three', 'body' : 'This is post three'}, removeFristElement, modifyThirdElement, getPosts);