document.getElementById('addBook').addEventListener('submit', addBook);
document.getElementById('logout').addEventListener('click', logout);
document.getElementById('admin').innerText = `Welcome, ${localStorage.getItem('username')}!`;
showBooks()


function newBook(id, name, author){
    this.id = id;
    this.name = name;
    this.author = author;
} 

function addBook(e){
    e.preventDefault();
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;

    data = localStorage.getItem('books');
    if(!data){
        let arr = [];
        data = JSON.stringify(arr);
    }
    //console.log
    books = JSON.parse(data);
    console.log(books);
    
    addedBook = new newBook(id, name, author);

    books.push(addedBook);

    localStorage.setItem('books', JSON.stringify(books));

    showBooks();
}

function showBooks(){

    let data = localStorage.getItem('books');

    if(!data){
        let arr = [];
        data = JSON.stringify(arr);
    }

    books = JSON.parse(data);

    let output = '<h2 class="mb-4 mt-3">Book List</h2>';

    books.forEach((book) =>{
        output += `
        <ul class= 'list-group mb-3'>
                <li class='list-group-item'>ID: ${book.id}</li>
                <li class='list-group-item'>Name: ${book.name}</li>
                <li class='list-group-item'>Author: ${book.author}</li>    
        </ul>
        `;
    });

    document.getElementById('output').innerHTML = output;

}

function logout(){
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('usertype');   
}