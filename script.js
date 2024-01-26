const rightHiddenElements = document.querySelectorAll('.right-hidden')
const leftHiddenElements = document.querySelectorAll('.left-hidden')
const hiddenElements = document.querySelectorAll('.count-hidden')
const contHiddenElements = document.querySelectorAll('.cont-hidden')


const observerCounter = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
if(entry.isIntersecting){
    entry.target.classList.add('count-show')
} else{
    entry.target.classList.remove('count-show')
}
    })
})

const observerRight = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
if(entry.isIntersecting){
    entry.target.classList.add('right-show')
    // entry.target.classList.remove('right-hidden')
} else{
    // entry.target.classList.add('right-hidden')
    entry.target.classList.remove('right-show')
}
    })
})

const observerleft = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
if(entry.isIntersecting){
    entry.target.classList.add('left-show')
    // entry.target.classList.remove('left-hidden')
} else{
    // entry.target.classList.add('left-hidden')
    entry.target.classList.remove('left-show')
}
    })
})

const observerCont = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
if(entry.isIntersecting){
    entry.target.classList.add('cont-show')
    // entry.target.classList.remove('left-hidden')
} else{
    // entry.target.classList.add('left-hidden')
    entry.target.classList.remove('cont-show')
}
    })
})

rightHiddenElements.forEach((el)=>observerRight.observe(el))

leftHiddenElements.forEach((el)=>observerleft.observe(el))

hiddenElements.forEach((el)=>observerCounter.observe(el))

contHiddenElements.forEach((el)=>observerCont.observe(el))
