const popuplearnmoreEl = document.querySelector(".popup-learnmore");
const image1El = document.querySelector(".image1");
const btnhomepicEl = document.querySelector(".btn-home-pic");
const xiconEl = document.querySelector(".x-icon");
const videoEl = document.querySelector(".video");

btnhomepicEl.addEventListener("click", ()=>{
    popuplearnmoreEl.classList.remove("active")
    image1El.classList.add("active")
});

xiconEl.addEventListener("click", ()=>{
    popuplearnmoreEl.classList.add("active")
    image1El.classList.remove("active")
    videoEl.pause();
    videoEl.currentTime = 0;
});

// ------- SLIDER IMAGE ------//

const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const innercontainerEl = document.querySelector(".inner-container");

let count = 1
let timeout;

nextEl.addEventListener("click", ()=>{
    count++
    clearTimeout(timeout)
   updateImage()

});
prevEl.addEventListener("click", ()=>{
    count--
    clearTimeout(timeout)
    updateImage()
 });

 updateImage()
function updateImage(){
    if(count > 6){
        count = 1
    }else if(count  < 1 ){
        count = 6
    }
    innercontainerEl.style.transform = `translateX(-${(count - 1) * 300}px)`

    timeout = setTimeout(()=>{
        count++
        updateImage()
    }, 3000)
}


// ---------- MENU BUTTON ------- //

const menuiconEl = document.querySelector(".menu-icon");
const leftsectionEl = document.querySelector(".left-section");

let counts = 0

menuiconEl.addEventListener("click", ()=>{
    if(counts %2 === 0){
        leftsectionEl.classList.remove("active");
        counts++
    }
    else{
        leftsectionEl.classList.add("active");
        counts++
    }
});


    
