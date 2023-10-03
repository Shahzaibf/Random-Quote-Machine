//import quotes from './quotes.json' assert {type: 'json'}
const response = await fetch('./quotes.json');
const quotesjson = await response.json(); 
let currentQuote, currentAuthor;
const quotearea = document.getElementsByClassName(".quotearea");
const authorarea = document.getElementsByClassName(".authorarea");

let randselecter = Math.floor(Math.random() * quotes.length);
currentQuote = quotesjson.quotes[randselecter]['quote'];
currentAuthor = quotesjson.quotes[randselecter]['author'];
console.log(`${quotesData}\n${currentAuthor}`);
quotearea.innerHTML = quotesData;

/*
fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
       // console.log(data.quotes[0]['quote']);
        for (let i = 0; i < data.length; i++) {
            quotes.push(data.quotes[i]['quote']);
            authors.push(data.quotes[i]['author']);
        }
    })  
    .catch(console.error);
*/


const btn = document.getElementById("qbutton");
const myIcons = document.querySelectorAll("i");
let newcolor = "#" + Math.floor(Math.random()*16777215).toString(16);

/*
btn.style.backgroundColor = newcolor;
document.body.style.backgroundColor = newcolor;
for(let i = 0; i < myIcons.length; i++) {
    myIcons[i].style.color = newcolor;
}
console.log(quotes);
quotearea.innerHTML = quotes[randselecter].quote;
*/
const changecols = () => {
    let newcolor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.animate([
        {backgroundColor: newcolor, color: newcolor },
    ],
        1000, function() {
            document.body.style.backgroundColor = newcolor;
            btn.animate([
                {backgroundColor: newcolor},
            ], 1000);   
            for(let i = 0; i < myIcons.length; i++) {
                myIcons[i].animate({ 
                    opaciy: 0,
                    backgroundColor: newcolor
                }, 1000, function () {
                    myIcons[i].animate({ opacity: 1}, 1000);
                });
            }
        }
    );
}

$(document).ready(function () {
    changecols();
})

btn.addEventListener("click", changecols);