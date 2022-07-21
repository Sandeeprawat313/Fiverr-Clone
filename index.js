// console.log("here")

const box = document.querySelector(".closureBox")

const slideParent = document.querySelector(".slider")
const slides = Array.from(slideParent.children)

const nextbtn = document.querySelector(".slick-next")
const prevtbtn = document.querySelector(".slick-prev")

let slidesW = slides[0].getBoundingClientRect().width
console.log(slidesW)


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


//     slideParent.style.transform  = 'translate(+' + toMove + ')';
//     // slideParent.style.transform  = 'translate(-' + toMove + ')';
//     currentSlide.classList.remove("currentSlide")
//     nextslide.classList.add('currentSlide')
// console.log("right")

}