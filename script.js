/*
let num= prompt("enter a no");
if (num % 2 == 0) {
    console.log("even no");
}
   else{
        console.log("odd no");
    }

*/
/* let i=99;
for(i=0;i<=100;i++){
    if(i%2==0){
        console.log("even no");
    }
}
*/

/*
let gameNum =25;
let userNum=prompt("guess the game number");
 while(userNum!=gameNum){
    userNum=prompt("you entered wrong number . guess again:");
 }
 console.log("congraulation , you entered the right number");

 */

 //string

 /*
 let str="sushmita reddy";
 let str1="shivuuuu";
 */
/*
 let obj={
    item:"pen",
    price:10,

 };
 console.log("the cost of",obj.item,"is",obj.price);
 let specialString='this is a template literal ${1+2+3+4}';
 console.log(typeof specialString);
 */

/*
 let str="hello";
 console.log(str.replace("h","y"));
 */

 /*
let usename= "@susmitareddy";
let fullname= "username"+13;
console.log(username);
console.log(fullname);
*/;
/*

let fullname= prompt("enter your full name ");
let username="@" +  fullname + fullname.length;

console.log(username);
*/


//let heroes=["shivu","sushmi","suman","rashmi","reshma"];
//for(let hero of heroes){
  //  console.log(hero);
//}

/*
let marks=[76,89,87,88,23,34];
let sum=0;
for(let val of marks){
    console.log(val);
    sum+=val;
}
let avg = sum/marks.length;
console.log(avg);
*/


let items=[240,234,678,987,567];
/*let i=0;
for(let val of items){
    console.log(`value at index ${i} = ${val}`);
    let offer= val/10;
    items[i]= items[i]-offer;
    console.log(`value after offer = ${items[i]}`);
    i++
}
*/

/*
for(let i=0;i<items.length;i++){
    let offer= items[i]/10;
    items[i] -=offer;
}
console.log(items);
*/

//let fooditems=["chips","chocolate","keurkur"];

//let arr=[1,2,3,4,5,6];
//arr.splice(2,2,101,102);

/*
function sum(x,y){
    console.log(x+y);
}
*/

/*
function sum(x,y){
    s=x+y;
    return s;
}
let val= sum(2,4);
console.log(val);

*/

//sum function


/*
function sum(a,b){
    return a+b;
}
const x=5;
const arrowsum =(a,b)=>{
    console.log(a+b);
};

//mutiplication function
 function mul(a,b){
    return a*b;
 }
 */

 //const printhello=()=>console.log("hello");

 /*
 function countVowels(str){
    let count =0;
for(const char of str){
    if(
    char ==="a"||  
    char ==="e"||
    char ==="i"||
    char ==="o"||
    char ==="u" 
    ){
        count++;
    }
}
    console.log(count);
 }

 const countVow = (str) =>{
    let count =0;
    for(const char of str){
        if(
        char ==="a"||  
        char ==="e"||
        char ==="i"||
        char ==="o"||
        char ==="u" 
        ){
            count++;
        }
    }

    return count;
 }
 */
/*
 let arr =[1,2,3,4,5];
 arr.forEach(function printVal(val){
    console.log(val);
 });
 */

 /*
 let arr=["pune","bang","maharasta"];
 arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
 })
 */

 /*
 let nums =[2,3,4,5];
 nums.forEach((num)=>{
    console.log(num*num);
 });
 */

 /*
 let nums =[67,76,87];
  let calcSquare=(num) =>{
    console.log(num**2);
  };
  nums.forEach(calcSquare);

  */

  /*
  let nums =[67,54,87];

  let newArr =nums.map((val)=>{
    return val* val;
  });
  //nums.map((val)=>{
    console.log(newArr);
  
   let calcsquare = (num)=>{
    console.log(num*num);
   };
   */
  /*

   var x= [10,32,43,54,65,34,2,3,4];
   var result =x.filter(n=>n>23)
   console.log(result);
   */
/*
   let arr= [1,2,3,4,5,6,7,8,9]
   let evenArr = arr.filter((val)=>{
    return val % 2!= 0;
   });
   console.log(evenArr);

   */
  /*

   const arr=[1,2,3,4,5];
   const initialValue=0;
   const sumWithIntial = arr.reduce((
    accumulator, cuurentValue)=> accumulator+
    cuurentValue,initialValue
);
console.log(sumWithIntial);
*/
/*
const a=[1,2,3,4];
const ini=0;
const sum=a.reduce((res,cur)=>res+cur,ini);
console.log(sum);
*/
/*

let arr=[1,2,9,8];
const out= arr.reduce((prev,curr)=>{
    return prev > curr ? prev:curr;
});
console.log(out);
*/
/*
let c=[54,98,78,99,97,79];
  let top=c.filter((val)=>{
    return val>=90;
});
console.log(top);

*/
/*
let n=prompt("enter a no");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((res,cur)=>{
    return res+cur;
});
console.log(sum);

let fact=arr.reduce((res,cur)=>{
    return res*cur;
});

*/
/*
console.log("hello");
alert("hiii");
window.console.log("heeello");
*/

//let heading = document.getElementById("heading");
//console.log(heading);
/*
let heading = document.getElementsByClassName("heading-class");
console.log(heading);
console.log(heading);
*/

//let firstE1 = document.querySelector("#myId")
//console.log(firstE1);

//let allEl =  document.querySelectorAll("p");
//console.log(allEl);
//console.dir(document.body.firstChild);
/*

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);
let name = div.getAttribute("name");
console.log(name);*/




/*
let h2= document.querySelector("h2");
 console.dir(h2.innerText);
h2.innerText= h2.innerText+"sushmitareddy"
*/
/*

let divs = document.querySelectorAll(".box");
 div[0].innerText =  "new unique value1";
 div[1].innerText =  "new unique value1";
 div[2].innerText =  "new unique value1";
 div[3].innerText =  "new unique value1";
 */

// let para= document.querySelector("div");
//console.log(para.getAttribute("class"));

/*
let div =document.querySelector("div");
div.style.backgroundColor="green";
div.style.backgroundColor="purple";

div.style.fontSize="26px";
div.innerText="hello";
*/

/*
let newbtn= document.createElement("button");
newbtn.innerText="click me";

newbtn.style.color="white";
newbtn.style.backgroundColor="red";
document.querySelector("body").prepend(newbtn);
let para = document.querySelector("p");


btn1.onclick = (e) =>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
    
    console.log("btn1 was clicked");
    let a=24;
    a++;
    console.log(a);//a=25 
};

 let div = document.querySelector("div");
 div.onmouseover=()=>{
    console.log("you are inside div");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
 };



btn1.addEventListener("click",()=>{
    console.log("button1 was clicked");
});

btn1.addEventListener("click",()=>{
    console.log("button1 was clicked- heading");
});
let div = document.querySelector("div");

*/


let modebtn = document.querySelector("#mode");
let currmode ="light";

modebtn.addEventListener("click",()=>{
if(currmode ==="light"){
    currmode="dark";
    document.querySelector("body").style.backgroundColor="black";
}else{
    currmode="light";
    document.querySelector("body").style.backgroundColor="white";
}

console.log(currmode);
})