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

function createPost(post, callback){
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error happend');
            }
        }, 2000);
    });
}

createPost({'title' : 'Post Three', 'body' : 'This is post three'})
.then(getPosts)
.catch(error=>console.log(error));

const promise_2=fetch('https://jsonplaceholder.typicode.com/users')
.then((resolve) => resolve.json());

promise_2
    .then(
        function megjelenít(values){
            console.log(values[0].name+" - "+values[0].email);
            let tablazat="<table><tr><th>Név</th></th><tr><th>Email</th></tr>";
            tablazat+=`<tr><td>${values[0].name}`;
            tablazat+="</table>";
            document.getElementById('tablazat').innerHTML=tablazat;
        }
    );
