//var userName = prompt("Enter Your Name");
//alert(userName);

//var num1 = +prompt("Enter First No");
//var num2 = +prompt("Enter Second No");
//alert(num1 + num2);

//Take the Users age in years as input and 
//output their year of birth.

//var currentYear = 2026
//var userAge = Number(prompt("Enter You Age"));
//var yearOfBirth = currentYear - userAge;

//alert(yearOfBirth)

//Expression

//var num1 = 10;
//var num2 = 2;

//console.log("Add = " , (num1 + num2));
//console.log("Sub = " , (num1 - num2));
//console.log("Mul = " , (num1 * num2));
//console.log("Div = " , (num1 / num2));
//console.log("Rem = " , (num1 % num2));

//var num1 = Number(prompt("Enter 1st Number"));
//var num2 = Number(prompt("Enter 1st Number"));

//console.log("Add = " , (num1 + num2));
//console.log("Sub = " , (num1 - num2));
//console.log("Mul = " , (num1 * num2));
//console.log("Div = " , (num1 / num2));

//var text = "hello world";
//var num;
//console.log(typeof num) //undefined
//var text = 10;
//console.log(text) // 10
//text = 12
//console.log(text) // 12
//text = "test";
//console.log(text) //test
//text = true;
//console.log(text) //true

//var text = null;
//console.log(text)
//text = "js"
//console.log(text)

//comparison operators

//Greater Then >
//console.log(6 > 5)
//Less Then <
//console.log(6 < 5)
//Greater Then Equal >=
//console.log(6 >= 5)
//Less Then Equal <=
//console.log(6 <= 5)
//Not equal !=
//console.log(6!= 5)
//2 == va 3 ==

//console.log("3" == 3); true
//console.log("3" === 3); false

//Logical operators
//&& ||
//&& needs both condition true
//|| needs any one condition true
//var a = 4;
//var b = 2;
//  4  2  4  2 
//console.log(a < b && a > b) //true
// false    true

//var a = prompt("enter no"); "5.3"
//console.log(parseFloat(a)); //convert starting to number 5
//console.log(parseInt(a));  //convert point value to number 5


//var age = 5;

//if(age > 10){
//console.log("age is greater then 10")
//}else{
//console.log("age is less then 10")
//}

//var marks = prompt("enter no");

//if(marks >= 80){
//console.log("A+ grade")
//}else if (marks >= 70){
//console.log("A grade")
//}else if (marks >= 60){
//console.log("B grade") 
//}else if (marks >= 50){
//console.log("C grade")
//}else{
//console.log("Fail")
//}

//
//if(!true){
//console.log("hello")
//}else{
// console.log("world")
//}

//Looping

//for(var i = 1; i <= 10; i++){
//  console.log(i)
//}

//var i = 1;
//while(i <= 10){
//console.log(i);
//i++
//}

//var i = 1;
//do{
// console.log(i);
//i++
//}while(i <= 10);

//for(var i = 10; i >= 0; i--){
//console.log(i)
//}

//var i = 1;
//while(i <= 10){
// console.log(4 , 'x' , i , " = " , 4 * i )
// i++;  
//}

//var i = 11;
//do{
// console.log(i);
//i--;
//}while(i >= 0);

//for(var i = 1; i <= 10; i++ ){
// console.log(2 , 'x' , i , " = " , 2 * i )
//}

//function SayHello(){
//console.log("Hello World 1");
//console.log("Hello World 2");
//console.log("Hello World 3");
//console.log("Hello World 4");
//console.log("Hello World 5");
//console.log("==============");
//}

//SayHello();
//SayHello();

//function add(){
// var a = 10;
// var b = 5;
//console.log(a + b);
//}
//add();

//function sub(){
// var a = 10;
//var b = 5;
//console.log(a - b);
//}
//sub();

//function mul(){
//var a = 10;
//var b = 5;
//console.log(a * b);
//}
//mul();

//function div(){
// var a = 10;
// var b = 5;
// console.log(a / b);
//}
//div();

//function print(name){
// console.log("name = " , name)
//}

//print("ali");
//print("ahmed");
//print("hamza");

//function add(a , b){
//console.log(a + b);
//}
//add(10 , 5);// 15
//add(2 , 3); //5
//add(4 , 3); //7
//add(4 , 5); //9

//function statement / declear
//function print(){
//console.log("hello")
//}
//print();

//funtion Expression
//var add = function(a , b){ //parameter
// console.log(a + b);
//}
//add(10, 5); //arguments

//var a = 10;
//let b = 12;
//const c = 15;

//console.log(a)
//console.log(b)
//console.log(c)

//const userName = "ali";
//let userAge = 10;
//userAge = 11;
//userAge = 12;

//console.log(userName)
//console.log(userAge)

//Hoisting

//console.log(a) 
//console.log(b)
//console.log(c)

//var a = 10;

//var b = 12;

//var c = 15;

//function print(){
//console.log("hello 0")
//console.log("hello 1")
//console.log("hello 2")
//return;
//console.log("hello 3")
//console.log("hello 4")
//}
//print();

//function add(a, b) {
//return a + b; //15
//}
//console.log(add(10, 5))

//Recursion
//function count(n){

//if (n === 0){
//  return;
// }

//console.log(n);

//count(n - 1);
//}
//count(5)

//Array
//var fruits = ["mango" , "banana" , "apple"];
//console.log(fruits[0] , fruits[1] , fruits[2]);

//Array Methods
//fruits.push("orange"); //add new element at the end
//console.log(fruits)

//fruits.pop(); //remove last element
//console.log(fruits)

//fruits.shift();// remove first element
//console.log(fruits)

//fruits.unshift("pineapple");// add new element at the start
//console.log(fruits)

//var fruits = ["mango" , "banana" , "apple" , "grapes" , "orange" , "kiwi" , "watermelon" ]

//var students = ["ali" , "ahmed" , "hamza" , "umer" , "bilal"]
//for of loop
//for(var name of students){

// console.log(name)
//}

//var students = ["ali" , "ahmed" , "hamza" , "umer" , "bilal" , "hassan"]
//var marks = [80, 90, 70, 60, 50, 40];

//for(var i = 0; i <= 5; i++){
//console.log(students[i], "=" , marks[i] )
//}

//var students = ["ali" , "ahmed" , "hamza" , "umer" , "bilal" , "hassan"]
//var a = 12;
//console.log(Array.isArray(a))
//console.log(Array.isArray(students))

//document.getElementById("hello").textContent = "HTML";
//document.getElementById("hello").style.color = "green";
//document.getElementById("hello").style.fontSize = "20px";
//document.getElementById("hello").classList.remove = ("Box");
//document.getElementById("hello").classList.add = ("active");

//document.querySelector("p").textContent = "JS";
//document.querySelector(".box").textContent = "JS";
// document.querySelector("#hello").textContent = "JS";

// document.querySelector("#box").style.height = "200px";
// document.querySelector("#box").style.width = "200px";
// document.querySelector("#box").style.backgroundColor = "red";
// document.querySelector("#box").style.border = "2px solid black";
// document.querySelector("#box").style.position = "absolute";
// document.querySelector("#box").style.left = "100px";
// document.querySelector("#box").style.top = "100px";

// document.querySelector("#box").style.cssText = `
// height: 200px;
// width: 200px
// background-color: red;
// `
// const box = document.querySelector("#box");

// const para = document.createElement("p");

// para.textContent = "HELLO WORLD";

// box.appendChild(para);

// function add(){
//    let userInput = document.querySelector("#input");

//    let para = document.createElement("p");

//    para.textContent = userInput.value;
//    userInput.value = "";

//    let box = document.querySelector("#box");

//    box.appendChild(para);
// }

// let box = document.querySelector("#box");
//console.log(box.classList.contains("new"))


//Object
// let student = {
//    name: "ali",
//    age: 20,
//    rollNo: 123,
//    city: "karachi",
// }

// //javascript object notation - JSON
// let data = JSON.stringify(student); //convert object to string
// console.log(data)

// let jsonData = '{ "name":"ali", "age": 20, "rollNo": 123, "city": "karachi" }';

// let changeToObject = JSON.parse(jsonData); //convert string to object
// console.log(changeToObject)

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))


// student.city = "lahore"; //update
// student.country = "pakistan" //add new property

// console.log(student.country)

// function show(){
//    alert("hello world");
// }

// let button = document.querySelector("#btn");

// button.addEventListener("click", function(){
//    alert("hello world");
// })















