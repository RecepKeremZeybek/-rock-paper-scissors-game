//* ------ Selectors ------- */

const selectionArticle = document.querySelector(".selection");

//? Secilen elemanların tasıyıcısı
const yourChoiceDiv = document.getElementById("your-choice");

//? message

const messagePar = document.querySelector(".message");

//? score-card
const scoreCardSection = document.querySelector(".score-card");

//* ------- Variables ------- */
let userSelectImage = document.createElement("img");
let pcSelectImage = document.createElement("img");

// colors
const YELLOW = " #ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//* ------- Event Listeners ------- */

selectionArticle.addEventListener("click", (e) => {
  //   console.log(e.target.id);
  if (
    e.target.id === "rock" ||
    e.target.id === "paper" ||
    e.target.id === "scissor"
  ) {
    userSelectImage.src = `assets/${e.target.id}.png`;
    userSelectImage.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImage);
    createPcSelection();
  }
});

//* ------- Functions ------- */

const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  const pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImage.src = `./assets/${pcRandom}.png`;
  pcSelectImage.alt = pcRandom;
  yourChoiceDiv.appendChild(pcSelectImage);

  calculateResult();
};

const calculateResult = () => {
  // console.log(userSelectImage.alt)
  // console.log(pcSelectImage.alt)

   //? Esitlik durumu
   if (userSelectImg.alt === pcRandom) {
    draw()
  } else {
    if (userSelectImg.alt === "rock") {
      pcRandom === "paper" ? youLost() : youWin()
    } else if (userSelectImg.alt === "scissor") {
      pcRandom === "rock" ? youLost() : youWin()
    } else if (userSelectImg.alt === "paper") {
      pcRandom === "scissor" ? youLost() : youWin()
    }
  }
}

const draw = () => {
  messagePar.textContent = "Its a draw"
  scoreCardSection.style.color = YELLOW
  messagePar.style.backgroundColor = YELLOW
}

const youLost = () => {}

const youWin = () => {}

// //? Resimler

// const rockImg=document.getElementById("rock")
// const paperImg=document.getElementById("paper")
// const scissorImg=document.getElementById("scissor")
// rockImg.addEventListener("click",()=>{

//     image.src="assets/rock.png"
//     image.alt="rock"
//     yourChoiceDiv.appendChild(image)

//     //* innerHtml
//     //? yourChoiceDiv.innerHTML=`  <img src="./assets/rock.png" alt="rock" id="rock" />`
// })
// paperImg.addEventListener("click",()=>{

//     image.src="assets/paper.png"
//     image.alt="paper"
//     yourChoiceDiv.appendChild(image)

//     //* innerHtml
//     //? yourChoiceDiv.innerHTML=`  <img src="./assets/rock.png" alt="rock" id="rock" />`
// })
// scissorImg.addEventListener("click",()=>{

//     image.src="assets/scissor.png"
//     image.alt="scissor"
//     yourChoiceDiv.appendChild(image)

//     //* innerHtml
//     //? yourChoiceDiv.innerHTML=`  <img src="./assets/rock.png" alt="rock" id="rock" />`
// })
