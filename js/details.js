import { greetUser } from "./greetuser.js";
// greetUser();
import { renderTopBar } from "./renderTopBar.js";
renderTopBar();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const isbn = urlParams.get("isbn");
const data = localStorage.getItem("books");
const books = JSON.parse(data);
// console.log(books);

const book = books.find((book) => book.isbn == isbn);
// console.log(book);

const info = document.querySelector(".book-info");

let output = `
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

`;

info.innerHTML = output;
