import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import pi, { doublePi, triplePi } from "./math.js";
//import * as pi from "./math.js";
import { add, multiply, subtract, divide } from "./calculator";
//import * as calculator from "./calculator";
import "./styles.css";

const fname = "Ruby";
const lname = "Singh";
const currentDate = new Date();
const year = currentDate.getFullYear();
const img = "https://picsum.photos/200";
const customStyle = {
  color: "blue",
  border: "1px solid black"
};
customStyle.color = "black";
var numbers=[3,5,40,10,60];
// function double(x)
// {
//   return x*2;
// }
// const newnumber=numbers.map(double);
// console.log(newnumber);
var newnumbers = [];
function doubl(x)
{
  newnumbers.push(x*2);
}
numbers.forEach(doubl);
console.log(newnumbers);

const newno= numbers.map(function dou(x){return x*2;});
console.log(newno);

//filter
const newn= numbers.filter(function(num){
  return (num >10);
});
console.log(newn);
// reduce
var no = numbers.reduce(function(accumulator,currentnum){
return accumulator + currentnum;});
console.log(no);
// var no = 0;
//  numbers.forEach(function(currentnum){
//   return no += currentnum
// })
console.log(no);
//find
const numb = numbers.find(function(num){
  return (num>10);
});
console.log(numb);

ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}>Hello {fname + " " + lname}</h1>
    <p style={customStyle}>My lucky no is {Math.floor(Math.random() * 10)}</p>
    <img alt="img" src={img + "?grayscale"} />
    <ol>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ol>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(3, 3)}</li>
      <li>{subtract(6, 4)}</li>
      <li>{divide(4, 2)}</li>
    </ul>
    <App />
    <p>Created By {fname + lname} </p>
    <p>copy right{year}</p>
  </div>,
  document.getElementById("root")
);
