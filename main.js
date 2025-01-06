// //document.getElementById("heading").innerHTML="changed"
// //console.log("this is a lesson");
// //variable var, let, const

// //x=1
// //y=3
// //z=x+y

// //Variables!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //var num1 = 1
// //var num2 = 2

// // var fullgreeting="hello,brendon"
// // let greetingCEO= "Hello, sir"
// // console.log(fullgreeting)

// //console.log(num1)

// //console.log(num1+num2)
// //let x=1
// //let y=3

// //let z = x+y

// //strings!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //const fname ="brendon"
// //console.log("fname")


// //function!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // function subtract(c, d){
// //     return c/d
// // }
// // let result= subtract(9, 24)

// // console.log(result)


// //Array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // let arr = ["brendon","nysha","joe","tino","blessed"]

// // console.log(arr[3])

// let fruits= ["banana","apple","mango","guava","avocado"]
// console.log(fruits[3])


// //loop for!!!!!!! a number can also be used like!!!! 5 instead of legnth!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let cars=['benz','toyota','mazda','g wagon','nissan']

// for(let i = 0;i < cars.length; i++ ) {
// console.log(cars[i])
// }
// //console.log(cars[0])
// //console.log(cars[1])
// //console.log(cars[2])
// //console.log(cars[3])
// //console.log(cars[4])
// for (let i = 1 ;i < 6; i++)[
// console.log(i)
// ]

// const fruit=['bannana','cherry','apple']
// for (let i=0;i<fruits.length; i++)[
//     console.log(fruits[i])
// ]


// //a man whom we want to walk 50 miles to the east and stop

// //for (let steps = 0; steps  <= 10; steps++)[
// //    console.log('l have walked',[steps])]

// const number= [1, 2, 3, 4, 5]
// let sum=0;

// for (let i=0;i< number.length;i++){
//     sum+=number [i];

//     console.log('total',sum)
// }

// //largest number in an array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let  numbers=[12, 34, 5, 67, 89];
// let largest = numbers[0]
// for  (i = 0;i < numbers.length;i++){
//     if (numbers [i] > largest){
//         largest= numbers[i];
//     }
// }
// console.log(largest)


// //data types!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let country = "zimbabwe"
// console.log(country.toUpperCase())
// console.log(country.concat("My Country"))
// console.log(country.split(1))

// //joins two two elements!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let arr = [1,2,3,4]
// console.log(arr.concat([5,6,7]))
// console.log(arr.indexOf(4))

// //removes the last element from the array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let frut = ["apple","bans","lemon","graps","guava"]
// frut.pop();
// console.log(frut)

// //adds to the end 0f an array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// frut.push("masau","tsvanzva")
// console.log(frut);

// //removes the first element!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// frut.shift()
// console.log(frut)

// //orders the numbers!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let numb = [1,3,2,4,7,5]
// numb.sort()
// console.log(numb)

// //write a function that takes an array of numbers and returns a new array with only the even numbers 

// let numbe = [1,2,3,4,5,6,7,8,9];
// for(let i=0;i<numbers.length;i++){
//     if(numbe [i] %2)
//         console.log(numbe[i])
// }

// //write a function that takes an array of numbers and log each number to the consol

// //define an array of people and include 4 names of your choice

// let people = ["brendon","mike","acadia","nashe","reason"]
// people.pop()

// console.log(people)


// //write an array with numbers that checks if all numbers are greater than 2 and returns

// //let array=[34, 19, 12, 11, 10]
// //for (let i=0;isSecureContext<array.length;i += 1){
//   //  if(array[i] < 10){
// //console.log("all numbers not greater zero");
//           // {console.log(false)} 
          

//  //methods of array,changing elements!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//           const array =["mango","apple","banana"]
//           array[0]= 'avo'
//           console.log(array)
// //deleting an array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//           delete array[1]
//           console.log(array)

// // SPLICE add new elements !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//           array.splice(1,0,'peach','guava')
//           console.log(array)

//  //DELETE NOT LIVING EMPTY SPACE SPLICE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  array.splice(2,1)
//  console.log(array)

//  //sort arrange alphabetically or numbers correctly!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//  console.log(array.sort())

// //reverse element!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(array.reverse())

// //arrange numbers inorder!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const nm=[30,10,2,7,24,98,36]
// nm.sort(function(a,b){return a-b})
// console.log(nm)

// //descending order!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// nm.sort(function(a,b){return b-a})
// console.log(nm)

// //Concat joining different elements!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const boys=['tanaka','tawanda','mike','blessed','philip']
// const girls=['nyashs','rose','amanda','angel']
// const meeting=boys.concat(girls)
// console.log(meeting)

// //picks elements in an array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const nwmeeting=meeting.slice(0,2)
// console.log(nwmeeting)


// //displays the value expressed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let expression="sunday"
// switch(expression){
//        case "monday":
//            console.log("going to work")
//             break
//         case "tuesday":
//             console.log("staying at home")
//             break
//         case "wednesday":
//             console.log("going for shopping")
//             break
//         case "thursday":
//             console.log("working out")
//             break
//          case "friday":
//             console.log("happy day") 
//             break
//         case "saturday" :
//             console.log("resting")
//             break 
//         case "sunday":
//             console.log("walking") 
//             break
//         case "defalt":
//             console.log("invalid")
// }

// // //for loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // for (e of nwmeeting){
// //     console.log(e)
// // }


// // //while loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
// // let r=0
// // while(r<=10){
// //     console.log("counting",r)
// //     r++
// // }

// //anonynmous function expressions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11

// let counter = (function(){
//     let count = 0;
//     return{
//         increment: function(){
//             count ++;
//         },
//         decrement: function(){
//             count --;
//         },
//         getcount:function(){
//             return count;
//         }
//     }
// })();
// counter.decrement();
//     counter.decrement();
//     counter.decrement();

//     console.log(counter.getcount());

//     function myFunction(a, b){
//         return a+b
//     }
// let result=myFunction(3, 10);
// console.log(result)

// function welcome(){
//     console.log("hello there welcome to sos")
// }
// welcome();
 const nav = document.querySelector("nav")
 const bars= document.querySelector(".bars")
 bars.addEventListener("click", function(){
     bars.classList.toggle("open");
     nav.classList.toggle("open")
 })

//event listeners!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111
// keypress
// mousedown
// mouseover
// clickevent

//     alert("mousedown")
//     h1.innerHTML="l was clicked"
// })
const btn= document.querySelector('#btn');

 btn.addEventListener("click", function(){
     console.log("Hi !!!!!!!!!!!!!!!")
 })

 //event listeners111111111111111111111111111111111111111111111111111111111111111111

// document.querySelector('button').addEventListener('click',()=>
//     {document.querySelector('.a').click()})

// document.addEventListener("keydown",event =>{
//     console.log(event.key)
// })

document.addEventListener("keyup",event =>{
    console.log('key up =${event.key}');
})
document.addEventListener("keypress",event=>{
    console.log(event.key)
})


document.addEventListener("keydown",event=>{
    console.log(event.key)
})

//set atributes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

const element = document.getElementById('elnt')
element.setAttribute('style','color:blue');
console.log(elnt.getAttribute('style'));

//create element!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

const newDiv= document.createElement("div")
newDiv.textContent = "hello sir man";
document.body.appendChild(newDiv)


// ES6 AND Moden JAVASCRIPT

let muyFunc= (name) =>{
console.log("my name is"+ name+ "my age is")
}

//old
muyFunc("brendon",22)

hello = function(a, b){
    return a+b;
}
let answer = hello (7, 8);


//nwe
hello=()=>{
    return "hello world"
}
//without aguements
hello=()=>"hello world"

//mor than one params requirebbrackets
//1 param no brack

hello=(val)=>"hello"+val;
let final  = hello('world')


alert((final))


function hieBrendon(){
    for(let i=0;i<10;i++){
        console.log(i)
    }
}
hieBrendon()


