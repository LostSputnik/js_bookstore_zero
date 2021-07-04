const stuff = document.getElementById('stuff');
const loggedIn = sessionStorage.getItem('loggedIn');

if(loggedIn === "true"){
    const username = sessionStorage.getItem('username');
    stuff.innerHTML += `<h1>Welcome, ${username}</h1>`;
    // stuff.append(document.createElement('br'));
    stuff.innerHTML += `<h1>You are an ${sessionStorage.getItem('usertype')}!</h1>`
    stuff.innerHTML += "<h1><a href='login.html' id='logout'>Logout</a></h1>";

    const logout = document.getElementById('logout');
    logout.addEventListener('click', function(){
        sessionStorage.removeItem('loggedIn');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('usertype');
})
}
else{
    stuff.innerHTML += "<div><h1>Not logged in</h1></div>"
    stuff.innerHTML += "<h1><a href='./login.html'>Login</a>    <a href='./register.html'>Register</a></h1>"

}