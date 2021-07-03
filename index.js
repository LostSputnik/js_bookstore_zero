
const resultsList = document.getElementById('results');
let info = [];
new URLSearchParams(window.location.search).forEach((value, name) => {
    resultsList.append(`${name}: ${value}`);
    info.push(value);
    resultsList.append(document.createElement('br'));
})

console.log(info);