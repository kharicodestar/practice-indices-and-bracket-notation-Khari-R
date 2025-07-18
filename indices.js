const readline = require('readline-sync');


let bookSeries = [
    ["Harry Potter", "Twilight", "Hunger Games"],
    ["Eragon", "The Lord of the Rings", "Mistborn"],
    ["The Chronicles of Narnia", "Game of Thrones", "The Maze Runner"]

];

onsole.log(bookSeries[0][0], bookSeries[0][1], bookSeries[0][2]); 
console.log(bookSeries[1][0], bookSeries[1][1], [1][2]); 
console.log(bookSeries[2][0], bookSeries[2][1], bookSeries[2][2]);

let row = 1; 
let item = 2; 
console.log(bookSeries[row][item]);

 
for (let i = 0; i < bookSeries[1].length; i++) { 