"use strict";

// const input = document.getElementsByTagName("input");
// const btn = document.getElementById("btn");

// let num = 1;

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

const userPositionArray = [
    'Sales manager',
    'Cashier',
    'Programmer',
    'Administrator',
    'Team leader',
    'Team leader',
    'Broker',
    'Financier',
    'Supervisor',
    'Industrial climber' 
];



fetch("http://192.168.1.148:3000")
  .then((res) => {
    res = res.json();
    return res;
  })
  .then((arr) => {
    console.dir(arr);
    const usersCards = arr.map((item, i, arr) => {
      console.log(item.profilePicture);

      const image = createImgForUserCard(item.profilePicture);

    });
  })
  .catch(() => {
    // console.dir(err);
  });


function createImgForUserCard(urlImg){

const userImg = document.createElement('img');

userImg.setAttribute('src', urlImg);
userImg.onerror(()=>{
    
});

userImg.classList.add('usrImg')


return userImg
}

function createUsername({firstName, lastName}){
if(typeof(firstName) !== 'string' || typeof(lastName) !== 'string'){
    throw new TypeError('First and last name must be string');
}

const userName = document.createElement('h4');

userName.textContent = `${firstName} ${lastName}`;

userName.classList.add('userCardBtn');

return userName;
}

function createUserPosition(position){
const userPosition = document.createElement('p');

const max = position.length;
const randNum = Math.floor(Math.random() * Math.floor(max));

userPosition.textContent = position[randNum];

return userPosition;
}

function createButtonConnection(){

const userCardButton = document.createElement('button');

userCardButton.classList.add('userCardBtn');
userCardButton.textContent = 'Connect';

return userCardButton;
}

function createUserCard(cardComponents){
    const {userImg, userName, userPosition, userCardButton} = cardComponents;

    const card = document.createElement('div');

    card.append(userImg, userName, userPosition,userCardButton)

return card;
}

