const rightHiddenElements = document.querySelectorAll('.right-hidden')
const leftHiddenElements = document.querySelectorAll('.left-hidden')
const hiddenElements = document.querySelectorAll('.count-hidden')
const contHiddenElements = document.querySelectorAll('.cont-hidden')
const body = document.body
const nav = document.querySelector('.nav-container')
const p = document.getElementsByTagName('p')
const modeButton = document.querySelector('.change')
const exp = document.querySelector('.exp')
const enhance = document.querySelector('.enhance-container') 
const discover = document.querySelector('.banner-dis') 
const light_btn = document.querySelector('.light-btn') 
const dark_btn = document.querySelector('.dark-btn') 
const dark_logo = document.querySelector('.dark-logo') 
const light_logo = document.querySelector('.logo') 
const dark_img = document.querySelector('.dark-img1') 
const light_img = document.querySelector('.img1') 

let light = true

const changeTheme = ()=>{
    body.classList.toggle('dark')
    nav.classList.toggle('dark')
    exp.classList.toggle('exp-dark')
    enhance.classList.toggle('enhance-container-dark')
    discover.classList.toggle('banner-dis-dark')
    light_btn.classList.toggle('hide')
    dark_btn.classList.toggle('hide')
    dark_logo.classList.toggle('hide')
    light_logo.classList.toggle('hide')
    light_img.classList.toggle('hide')
    dark_img.classList.toggle('hide')

    console.log(exp);
}

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
