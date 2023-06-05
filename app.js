//* ------ Selectors ------- */


//? Resimler

const rockImg=document.getElementById("rock")
const paperImg=document.getElementById("paper")
const scissorImg=document.getElementById("scissor")

//? Secilen elemanların tasıyıcısı
const yourChoiceDiv= document.getElementById("your-choice")

//* ------- Variables ------- */
let image =document.createElement("img")




//* ------- Event Listeners ------- */

rockImg.addEventListener("click",()=>{


   
    image.src="assets/rock.png"
    image.alt="rock"
    yourChoiceDiv.appendChild(image)

    //* innerHtml
    //? yourChoiceDiv.innerHTML=`  <img src="./assets/rock.png" alt="rock" id="rock" />`
})
paperImg.addEventListener("click",()=>{


   
    image.src="assets/paper.png"
    image.alt="paper"
    yourChoiceDiv.appendChild(image)

    //* innerHtml
    //? yourChoiceDiv.innerHTML=`  <img src="./assets/rock.png" alt="rock" id="rock" />`
})
scissorImg.addEventListener("click",()=>{


   
    image.src="assets/scissor.png"
    image.alt="scissor"
    yourChoiceDiv.appendChild(image)

    //* innerHtml
    //? yourChoiceDiv.innerHTML=`  <img src="./assets/rock.png" alt="rock" id="rock" />`
})



//* ------- Functions ------- */




