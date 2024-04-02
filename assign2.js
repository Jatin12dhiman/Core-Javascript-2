//  Q1
const square =(num)=>num*num;

const number =10;
const squareNumber=square(number);
console.log("Square :", squareNumber);

// Q2
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a,b)=>a-b)
//console.log(ages)
const minAge=ages[0];
const maxAge=ages[ages.length-1]
//console.log(maxAge)
//median of ages
let medianAge;
if(ages.length%2===0)//even
{
    const mid1=ages[Math.floor(ages.length/2)-1];
    const mid2=ages[Math.floor(ages.length/2)];
    medianAge =(mid1+mid2)/2;
}
else{//odd
    medianAge=ages[Math.floor(ages.length/2)];
}
//Average Age
const sumAges= ages.reduce((sum,age) => sum+age,0);
const averageAge=sumAges/ages.length;
// Range
const ageRange=maxAge-minAge;

//Compare
const minDifference=Math.abs(minAge-averageAge);
const maxDifference=Math.abs(maxAge-averageAge);

console.log('Sorted Ages :',ages);
console.log('Min Ages :',minAge);
console.log('Max Ages :',maxAge);
console.log('Median Ages :',medianAge);
console.log('Average Ages :',averageAge);
console.log('Age Ranges :',ageRange);
console.log('Min - Average Difference :',minDifference);
console.log('Max - Average Difference :',maxDifference);

//Question 3=Create a Map to store contact information (name, age, email, location) and implement a function to 
//retrieve contact details by name

const contactMap = new Map();
contactMap.set("Shiv",{
    age: 30,
    email:"shivam004@gmail.com",
    location :"Samalkha",
});
contactMap.set("Manav",{
    age:21,
    email:"manav3345@gmail.com",
    loction:"Rohtak",
})
contactMap.set("Sagar",{
    age:25,
    email:'sagarPaswan@gmail.com',
    locaation:'Panipat',

});
// function to retrieve contact details
function getContact(name){
    return contactMap.get(name);
}
console.log(getContact("Manav"));
/**Q4=. Create two objects person1 and person2 with properties name and age. Create a function “introduce” that prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself using the introduce function **/

const person1={ name:"nano", age : 34}
const person2={ name:"sinchan", age : 5}

function introduce(){
    console.log(`Hello, I am ${this.name} , and I am ${this.age} year old`);// this refers to that name given in datatype
}
introduce.call(person2);// call:-
/** Q%:-You are developing a program to manage a list of unique items. Write a JavaScript program that uses a Set to store a collection of unique numbers. Use the Map object to associate each number with its square. Finally, print both the unique numbers and their corresponding squares */

let uniqueNumbers=new Set([1,7,5,9,2,3,8])

 let numberSquareMap=new Map();

 uniqueNumbers.forEach(number=>{
    numberSquareMap.set(number,number*number);
 });

 console.log("Unique Numbers :");
 console.log(Array.from(uniqueNumbers).join(', '));

 console.log("\n Number-Square Map:");
 numberSquareMap.forEach((square,number)=>{
    console.log(`${number} :${square}`);
 });
 /** Q6:- Create a simple JavaScript function named displayInfo that takes two parameters (name and role) and 
logs a message
Use call to invoke the displayInfo function with specific arguments
 Use apply to invoke the displayInfo function with arguments passed as an array
 Create another function named greet that logs a greeting with this context
 Use bind to create a new function boundGreet with a specific context and log the greeting
  */

 function displayInfo(name, role){
    console.log(`Name :${name}, Role :${role}`);
 }
 displayInfo.call(null,"Sagar","Developer");

 displayInfo.apply(null,["Shiv","SDE"]);// null nhi likha to undefined aa rha kyu

 function greet(){
    console.log(`Hello,${this.name}!`);
 }

 const user={name:"PK"};
 const boundGreet=greet.bind(user);
 boundGreet();
 /** Q 8 : -  Create an object named calculator with methods add, subtract, and multiply
 Implement the calculate method in the calculator object, which takes an operation ('add', 'subtract', or 
'multiply') and two numbers
 Use call to perform an addition operation using the calculate method
 Use apply to perform a multiplication operation using the calculate method with arguments as an array
 Create another object named discountCalculator with a discount percentage property and a method 
applyDiscount
 Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and 
can be reused */

const calculator={
    add: function(a,b){
        return a+b;
    } ,
     subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    calculate: function(operation,a,b){
        if(operation==='add'){
            return this.add(a,b);
        }
        else if(operation=== 'subtract'){
            return this.subtract(a,b);
        }
        else if(operation==='multiply'){
            return this.multiply(a,b)
        }
        
    },
};
const additionResult =calculator.calculate.call(calculator,'add',5,3);
console.log(`Addition Result:${additionResult}`);

const multiplicationResult=calculator.calculate.apply(calculator,['multiply',4,2]);
console.log(`Multiplication Result :${multiplicationResult}`)


// Discount Calculator Object
 const discountCalculator={
    discountPercentage:10,
    applyDiscount: function(amount){
        return amount-(amount*this.discountPercentage)/100;
    },
 };


// a new function bound to DiscountCalculator

const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

const discountedAmount=calculateDiscount(100);
console.log(`Discount Amount: ${discountedAmount}`);