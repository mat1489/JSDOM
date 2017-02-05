"use strict";

var pierwszyDiv= document.getElementById('parFirst');
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.children);          //tablica do konkretnego elementu children[0]


console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

var pierwszyChild=pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling.nextSibling.nextSibling);//wer1
console.log(pierwszyDiv.childNodes[5]);                         //wer2


var childNodesDiva = pierwszyDiv.childNodes;

childNodesDiva.forEach(function (element){
    if(element.nodeType == 3 ){
        console.log(element);
    }
});


var childrenDiva =  pierwszyDiv.children;
console.log(childrenDiva);
console.log(childrenDiva.length);

for (var i=0; i <childrenDiva.length; i++){
    console.log(childrenDiva[i]);
}


