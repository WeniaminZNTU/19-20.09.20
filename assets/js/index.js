"use strict";

const input = document.getElementsByTagName("input");
const btn = document.getElementById("btn");

let num = 1;

// btn.addEventListener("click", (event) => {

//     for(let i = 1; i < 26; i++){
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 console.log(i);
//             }, 200)
//         }, 200);
//     }
// });

// const p1 = new Promise(resolve, reject)=>{
//     resolve('RESOLVED PROMISE');
//     reject('REJECTED PROMISE');
// };

// p1
//   .then(
//     (string)=>{
//         console.log('Then result:', string);
//         return new Promise(resolve, reject)=>{
//             resolve(string);
//         };
//     },
//     (err)=>{
//         console.error(err);
//         return this;
//     }
// )
//   .then(
//     (string)=>{
//         console.log(string);
//     }
// )



/*
 function logNumbersInterval() {
    if(num < 26){
    console.log(num++);
    }
}
 */
// function logNumbersTimeout(){
//     setTimeout(()=>{
//         console.log(i);
//     }, 200)
// }
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// Lesson 1(20.09.20)

fetch('http://192.168.1.148:3000')
  .then((res)=>{
      res = res.json();

      console.dir(res);
      
      return res;
    //   let arrUsersData = users.stringify
    //   return JSON.parse(users);
    })
  .then((arr)=>{
      console.dir(arr);
      const usersCards = arr.map((item,i,arr)=>{
          console.log(item.id)
      })
  })
  .catch();


