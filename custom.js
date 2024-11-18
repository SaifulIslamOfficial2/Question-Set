
// 1. Basic Variables and Data Types*

const name = 'saiful islam';
const age = 24;
console.log(`my name is md ${name} i am  ${age} years old`);


// *2. Conditions*

const num = 7; 
 if ( num % 2 === 0 ) {
    console.log("the number is even");
 } else{
    console.log("the number is odd");
 };

// 3 loop
for ( let i = 1; i <= 5 ; i++){
    console.log(i);
}

//4 function 
const addNumber = function ( num1 , num2){
    return num1 + num2;
}
const result = addNumber(3, 7);
console.log(result);

//5 . Arrays*
 const fruits =["apple","banana","cherry"];

 fruits.push("orange");

 console.log(`this is frist fruits ${fruits[0]}`);
 console.log(`this is total fruits ${fruits.length}`);

//  .6 Array Methods: forEach**

 const numbers =[1,2,3,4,5];

 numbers.forEach((number)=> {
  console.log(number * 2 );
 });

//  *7. DOM Manipulation*
const button = document.getElementById("changText");
const heading = document.querySelector("h1");

button.addEventListener('click', ()=>{
    heading.textContent= " click the button! ";
});


// *8. String Manipulation*

const text = "helleo world";
console.log(text.toUpperCase());

// *9. Objects*
const address = {
    name : "saiful islam",
    age : 24,
    greet: function () {
        return(`my name is ${address.name}`)
    }
}
console.log(address.greet());
