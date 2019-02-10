 //This is my first javascript code
 console.log("Hello World");
 //variables
 let name = "Prasamsha";
 console.log(name);
  let interstRate= 0.3;
  interstRate= 1;
  console.log(interestRate);
  //constant: the value cannot be changed

  //Primitives/value types
    
  let name='Prasamsha'; //string
  let age= 22; //number
  let isApproved= false; //boolean
  let firstName = undefined;
  let lastName = null;
  let selectColor = null; //null to create a value of variable
    //dynamic language: can change one time
    //static language doesn't change

    //Reference types
    /* Object
    Array
    Function
  */
 
 let person = 
     name: 'Prasamsha',
     age= 22
 }; //object

 //dot notation
 person.name= 'john';

 //Bracket notation
 person['name'] = 'Mary';
 console.log(person);

 //Arrays
 let selectedColors = ['red' , 'blue'];
 selectedColors[2]= 'green';
 console.log(selectedColors);
 console.log(selectedColors.length);

 //functions 
function greet(name , lastName) //Parameters 
{
    console.log('hello' + name + '' +lastName);
}

greet('Prasamsha , Mary'); //arguments

//Type of functions
//Performing a task
function greet(name , lastName) //Parameters 
{
    console.log('hello' + name + '' +lastName);
}

//calculating a value

function square(number) {
  return  number * number ;
}

let number = square(2);
console.log(number);
    //OR

//console.log(square(2));




 




