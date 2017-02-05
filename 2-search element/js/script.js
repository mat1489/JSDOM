"use strict";

var parFirst = document.getElementById('parFirst');
console.log(parFirst);


var linki= document.getElementsByClassName('link');
console.log(linki);

var linkiPoTagu=document.getElementsByTagName('a');
console.log(linkiPoTagu);

var linkiPoSelektorze=document.querySelectorAll('.superlink');
console.log(linkiPoSelektorze);

var paragrafPoId=document.querySelector('#parSecond');

var pierwszyLinkPoSelektorze= document.querySelector('.superlink');

var divPoId=document.querySelector('#parSecond');

linkiPoSelektorze.forEach(function(link, i){                //iterowanie po kolekcji
    console.log(link.innerHTML);
})

