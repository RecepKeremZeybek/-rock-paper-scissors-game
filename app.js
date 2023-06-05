//* ------ Selectors ------- */

const selectionArticle = document.querySelector(".selection");

//? Secilen elemanların tasıyıcısı
const yourChoiceDiv = document.getElementById("your-choice");

//* ------- Variables ------- */
let userSelectImage = document.createElement("img");

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
    createPcSelection()
  }
});



const createPcSelection=()=>{
    const pcArr=["rock","paper","scissor"]
    const pcRandom=pcArr[Math.floor(Math.random()*3)]
}

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

//* ------- Functions ------- */
