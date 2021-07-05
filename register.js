document.getElementById('form').addEventListener('submit', check);

function check(e){
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let usertype = document.getElementById('usertype').value

    // alert(username + password);
    if(username === '' || password === ''){
        alert("Please enter all required details");
    }

    values = [];
    values.push(username);
    values.push(password);
    values.push(usertype);

    let info = values.join(" ");
    // alert(info);
    localStorage.setItem(username, info);
    window.location.replace('./registered.html');
}

