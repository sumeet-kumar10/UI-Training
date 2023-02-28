console.log(1 + 3);
console.log("apple"+ "orange");
console.log(1 + 3 + "apple");
console.log("apple" + 1 + 2);
console.log(1+true);
console.log(0 == false);
console.log(1 == true);
console.log(2 == "2");


// section 2

const players = ["Rohit", "KL Rahul", "Kohli", "Mayank","Dhoni","Pandya","jadeja", "Ashwin", "Bumrah", "Kuldeep","Shami"];
console.log(players);
players.shift();
console.log(players.length);
players.unshift("Shikhar");
players.sort();
console.log(players);


let obj = {};
players.forEach(myFunction)  //changed forEach
function myFunction(i,players){
    let value = Math.floor(50 * Math.random());
    obj[value] = players[i];
}
console.log(obj);



const newPlayers = players.map(Element => Element.toUpperCase());
console.log(newPlayers);




//  section 3

function printNumber(n){
for(let i = 1;i <= n;i++)
    console.log(i);
}
printNumber(100);


function currentday() {
    today = new Date();
    var dd = String(today.getDate()).padStart(2,'0');   //changed padStart
    var mm = String(today.getMonth()+1).padStart(2,'0');
    var yyyy = today.getFullYear();
    
    return (dd+'/'+mm+'/'+yyyy)
    }
console.log(currentday());



function convertFahrenheitToCelsius(degrees) {
    const temp = Math.floor(5 / 9 * (degrees - 32));
    return temp;
}
console.log(convertFahrenheitToCelsius(100));  



let array = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
array.forEach(item => {  //changed forEach
    sum += item;
});
console.log(sum/array.length);



function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const result = reverseString("abcd");
console.log(result);







