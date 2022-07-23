// console.log("here")

const box = document.querySelector(".closureBox")

const slideParent = document.querySelector(".slider")
const slides = Array.from(slideParent.children)
console.log(slides)
const nextbtn = document.querySelector(".slick-next")
const prevtbtn = document.querySelector(".slick-prev")

let slidesW = slides[0].getBoundingClientRect().width



// slides[0].style.left = 0
// slides[1].style.left = slidesW + "px"
// slides[2].style.left = slidesW * 2 + "px"
// slides[3].style.left = slidesW * 3 + "px"


// Arrange slides next to each other
const setPostion=(slide , index)=>{
    slide.style.left = slidesW * index + "px"
   
}
slides.forEach(setPostion)

const moveToSlide = (box,currentSlide,nextslide) => {
     
    slideParent.style.transform  = 'translate(-' +  nextslide.style.left + ')';
    currentSlide.classList.remove("currentSlide")
    nextslide.classList.add('currentSlide')
}



nextbtn.onclick = (e) => {
    const currentSlide = slideParent.querySelector(".currentSlide")

    let nextslide = currentSlide.nextElementSibling
    console.log(currentSlide)
    console.log(nextslide)
    if(nextslide === null){
        nextslide = slides[0]
    }else{
        nextslide = currentSlide.nextElementSibling
    }
    moveToSlide(box,currentSlide,nextslide)
}

    
prevtbtn.onclick = (e) =>{

    const currentSlide = slideParent.querySelector(".currentSlide")
    let nextslide = currentSlide.previousElementSibling
    // console.log(nextslide)
    if(nextslide === null){
        nextslide = slides[slides.length - 1]
    }else{
        nextslide = currentSlide.previousElementSibling
    }
    const toMove = nextslide.style.right ;
    moveToSlide(box,currentSlide,nextslide)

}





let box2 = document.querySelector(".slider2")
let slidearr = document.querySelector(".sliderContent")
let array = Array.from(slidearr.children)

let move = array[0].getBoundingClientRect().width
  


let setNewpostion = (slide , index) => {
    slide.style.left = move * index + "px"
}
array.forEach(setNewpostion)
let nextbtn2 = document.querySelector(".close2next")
let prebutton2 = document.querySelector(".close2prev")

// console.log(move)

nextbtn2.onclick = () => {

    let here = document.querySelector(".here")
    let next = here.nextElementSibling
    if(next === null){
        next = array[0]
    }else{
        next =  here.nextElementSibling
    }
    movecard(box2,here,next)
}
prebutton2.onclick = () => {

    let here = document.querySelector(".here")
    let next = here.previousElementSibling
    if(next === null){
        next = array[array.length-1]
    }else{
        next = here.previousElementSibling
    }
    movecard(box2,here,next)
}

const movecard = (box,curr,nextsl)=>{

    slidearr.style.transform  = 'translate(-' +  nextsl.style.left + ')';
    curr.classList.remove("here")
    nextsl.classList.add("here")

}

// let list =  document.querySelectorAll(".catergoriesHeading")

// let flag =  false 
// list.onclick = (e) => {
    
//     if(flag === false){
//         flag = true
//         let x = document.querySelector(".footerlistBox>.footerlist")
//         x.style.display = "block"
//     }else{
//         flag = false
//         let x = document.querySelector(".footerlistBox>.footerlist")
//         x.style.display = "none"
//     }
// }




let plus1 = document.querySelectorAll(".catergoriesHeading")
let list = document.querySelectorAll(".footerlistBox>.footerlist")
for (let i = 0; i < plus1.length; i++) {
    plus1[i].addEventListener("click", function () {
        list[i].classList.toggle("show")
    })
}

