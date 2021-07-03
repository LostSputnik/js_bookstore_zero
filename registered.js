let values = [];

new URLSearchParams(window.location.search).forEach((value) => {
    //localStorage.setItem(name, value);
    values.push(value);
})

let info = values.join(" ");
localStorage.setItem(values[0], info);
