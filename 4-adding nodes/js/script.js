"use strict";

var istniejacyWezel = document.getElementById('parFirst').children[2];  //przypisz do zmiennej istniejacyWezel

console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stworz nowy element p
console.log(newElement);
var newElementContent = document.createTextNode('To jest nowy paragraf'); //stworz nowy tekst dla emenentu p

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

document.getElementById('parFirst').replaceChild(newElement, istniejacyWezel); //zamien drugi link na paragraf










/*dodaj znacznik br po kazdym linku i usun z nich atrybut klasy*/


var linki=document.querySelectorAll('a');       //przypisz do zmiennej tablice ze wszystkimi linkami
console.log(linki);



for (var i=0; i<linki.length; i++){             //iteracja po tablicy
    console.log(linki[i]);
    var br =document.createElement('br');         //stworz element br
    linki[i].parentNode.insertBefore(br, linki[i].nextSibling);     //dodaj br po kazdym linku
    linki[i].removeAttribute('class');      //usun atrybut klasy    
}












