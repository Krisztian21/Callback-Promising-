'use strict';

const posts = [
    { 'title': 'Post One', 'body' : 'This is post one'},
    { 'title': 'Post Two', 'body' : 'This is post two'},
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error) {
                resolve();
            }
            else {
                reject('Error happened.');
            }
        }, 2000)
    })
    
    /*setTimeout(() => {
        posts.push(post);
    }, 2000);*/
}

/*createPost({ 'title' : 'Post Three', 'body' : 'This is post three'})
    .then(getPosts)
    .catch(error => console.log(error));*/

/*const promise_2 = fetch("https://jsonplaceholder.typicode.com/users")
    .then((resolve) => resolve.json());

promise_2.then(
    function megjelenit(values) {
        let tablazat = `<table class="table table-striped table-dark"><tr><th>Név</th><th>Email</th><th>Adress</th></tr>`;
        /*tablazat+=  `<tr><td>${values[0].name}</td><td>${values[0].email}</td></tr>`;*/
        /*for (const key in values) {
            tablazat+= `<tr><td>${values[key].name}</td><td>${values[key].email}</td></tr>`;
        }
        values.forEach((value) => {
            tablazat+= `<tr><td>${value.name}</td><td>${value.email}</td><td>${value.address.city} - ${value.address.street} ${value.address.suite}</td></tr>`;
        });
        tablazat += "</table>";
        document.getElementById('tablazat').innerHTML = tablazat;

    }
);*/

async function placeholderAdatokMegjelenitese(){
    const adatok=await fetch("https://jsonplaceholder.typicode.com/users");
    const values=await adatok.json();
    console.log(values);
    function megjelenit(values) {
        let tablazat = `<table class="table table-striped table-dark"><tr><th>Név</th><th>Email</th><th>Adress</th></tr>`;
        tablazat+=  `<tr><td>${values[0].name}</td><td>${values[0].email}</td></tr>`;
        for (const key in values) {
            tablazat+= `<tr><td>${values[key].name}</td><td>${values[key].email}</td></tr>`;
        }
        values.forEach((value) => {
            tablazat+= `<tr><td>${value.name}</td><td>${value.email}</td><td>${value.address.city} - ${value.address.street} ${value.address.suite}</td></tr>`;
        });
        tablazat += "</table>";
        document.getElementById('tablazat').innerHTML = tablazat;

    }
    megjelenit(values);
}