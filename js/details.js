import {greetUser} from './greetuser.js';

const getBook = async () => {
    const params = new URLSearchParams(document.location.search.substring(1));
    const id = params.get('id');
    const response = await fetch('http://127.0.0.1:3000/api/v1/books/' + id);
    const data = await response.json();
    const book = data.data.data;
    showBook(book);
}

const showBook = (book) => {

    const info = document.querySelector('.book-info');
    // console.log(book.infolink)

    const output = `
                <img src="${book.thumbnail}" alt="" class="thumbnail">
                <div class="book-title">${book.title}</div>
                <hr>
                <div class="authors">Author: ${book.authors}</div>
                <hr>
                <div class="year">Published: ${book.publishedDate}</div>
                <hr>
                <div class="categories">Categories: ${book.categories}</div>
                <hr>
                <div class="description">${book.description}</div>
                <hr>
                <div class="publisher">Publisher: ${book.publisher}</div>
                <hr>
                <div class="pages">Pages: ${book.pageCount}</div>
                <hr>
                <div class="googlebookslink"><a href="${book.infolink}">Learn more on Google Books</a>
                </div>
                <hr>

    `

    info.innerHTML = output;

}

try{
    greetUser();
    getBook()
} catch(err) {
    console.log(err);
}