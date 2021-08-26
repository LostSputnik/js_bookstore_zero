import {logOut} from './logout.js';
import {greetUser} from './greetuser.js';

let logout = document.querySelector('.logout');
logout.addEventListener('click', logOut);

const showBooks = (library, books) => {
    if(!books){
        books = [];
    }
    if(!books.length){
        // console.log('ok');
        library.innerHTML = "Sorry, No Books Yet!"
    }
    else{
        let output = '';
        books.forEach(book => {
            output += `
            <div class="book">
                <img src="${book.thumbnail}" alt="" class="cover">
                <div class="book-title">${book.title}</div>
                <a href="./details.html?id=${book.id}" class="booklink">Know More</a>
            </div>
            `;
        });
        library.innerHTML = output;

        // THIS CODE ADDED ID TO BOOK'S CLASS IN OLDER IMPLEMENTATION
        // let links = library.querySelectorAll('.booklink');
        // // console.log(links);
        // links.forEach(link => {
        //     // console.log(link.classList[1]);
        //     link.addEventListener('click', () => {
        //         let id = link.classList[1];
        //         localStorage.setItem('currentBook', id);
        //     });
        // });
    }
}

const fetchBooksandShow = async (library, url) => {
    const response = await fetch(url);
    const data = await response.json();
    const books = data.data.data;
    showBooks(library, books);
}
try{
    greetUser();
    // let data = localStorage.getItem('books');
    let library = document.querySelector('.library');
    let url = 'http://127.0.0.1:3000/api/v1/books';

    fetchBooksandShow(library, url);
} catch(err){
    console.log(err);
}