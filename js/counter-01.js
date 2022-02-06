

const btnPlus = document.querySelector('[data-action="plus"]')
const btnMinus = document.querySelector('[data-action="minus"]')
const counter = document.querySelector('[data-counter=""]')


btnPlus.addEventListener('click', function() {
    counter.innerText = ++counter.innerText
})


btnMinus.addEventListener('click', function() {
    if(parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText
    }
})  



 



