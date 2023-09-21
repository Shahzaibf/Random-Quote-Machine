//import quotes from './quotes.json' assert {type: 'json'}
let response = await fetch('./quotes.json');
let quotes = await response.json();
let btn = document.getElementById("qbutton");
let myIcons = document.querySelectorAll("i");
let newcolor = "#" + Math.floor(Math.random()*16777215).toString(16);
let quote = document.getElementsByTagName('p');


btn.style.backgroundColor = newcolor;
document.body.style.backgroundColor = newcolor;
for(let i = 0; i < myIcons.length; i++) {
    myIcons[i].style.color = newcolor;
}



const changecols = () => {
    let newcolor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = newcolor;
    btn.style.backgroundColor = newcolor;
    for(let i = 0; i < myIcons.length; i++) {
        myIcons[i].style.color = newcolor;
    }
}

btn.addEventListener("click", changecols);