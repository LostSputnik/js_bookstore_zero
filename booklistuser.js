document.getElementById('logout').addEventListener('click', logout);
document.getElementById('user').innerText = `Welcome, ${localStorage.getItem('username')}!`;

function logout(){
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('usertype');   
}

function showBooks(){

    let data = localStorage.getItem('books');

    if(!data){
        let arr = [];
        data = JSON.stringify(arr);
    }

    books = JSON.parse(data);

    let output = '<h2 class="mb-4">Book List</h2>';

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

showBooks();


