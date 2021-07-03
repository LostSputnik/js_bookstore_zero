// window.location.replace('./index.html');

let values = [];

new URLSearchParams(window.location.search).forEach((value) => {
    values.push(value);
})

console.log(values);

let getCreds = localStorage.getItem(values[0]);

if(!getCreds){
    window.location.replace('./wrong_creds.html')
}

let creds = getCreds.split(" ");

console.log(creds);

if(values[1] === creds[1]){
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", creds[0]);
    localStorage.setItem("usertype", creds[2]);
    window.location.replace('./index.html');
}else{
    window.location.replace('./wrong_creds.html')
}