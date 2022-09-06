import { logOut } from "./logout.js";
import { greetUser } from "./greetuser.js";
import { renderTopBar } from "./renderTopBar.js";
import { loadDefaultBooks } from "./loadDefaultBooks.js";

renderTopBar();
// greetUser();

let logout = document.querySelector(".logout");
logout.addEventListener("click", logOut);

let library = document.querySelector(".library");

let data = localStorage.getItem("books");
let books = JSON.parse(data);

if (!books) {
  books = loadDefaultBooks();
}

let search = document.querySelector(".book-search");
search.addEventListener("input", filterBooklist);

function filterBooklist(e) {
  e.preventDefault();
  if (!e.target.value) {
    renderBookList(books);
  }
  let filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  console.log(filteredBooks);
  renderBookList(filteredBooks);
}

function renderBookList(books) {
  if (!books.length) {
    // console.log('ok');
    library.innerHTML = "Sorry, No Books Yet!";
  } else {
    let output = "";
    books.forEach((book) => {
      output += `
          <div class="book">
              <img src="${book.thumbnail}" alt="" class="cover">
              <div class="book-title">${book.title}</div>
              <a href="./details.html" class="booklink ${book.id}">Know More</a>
          </div>
          `;
    });
    library.innerHTML = output;
    let links = library.querySelectorAll(".booklink");
    console.log(links);
    links.forEach((link) => {
      // console.log(link.classList[1]);
      link.addEventListener("click", () => {
        let id = link.classList[1];
        localStorage.setItem("currentBook", id);
      });
    });
  }
}
renderBookList(books);
