const stuff = document.getElementById('stuff');
const loggedIn = localStorage.getItem('loggedIn');

if(loggedIn === "true"){
    const username = localStorage.getItem('username');
    stuff.innerHTML += `Welcome, ${username}`;
    stuff.append(document.createElement('br'));
    stuff.innerHTML += "<a href='login.html' id='logout'>Logout</a>";

    const logout = document.getElementById('logout');
    logout.addEventListener('click', function(){
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('usertype');
})
}
else{
    stuff.innerHTML += "<div>Not logged in</div>"
    stuff.innerHTML += "<a href='./login.html'>Login</a>"
}