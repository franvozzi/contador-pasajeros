// document.getElementById("count").innerText = 5

let count = 0
let countEl = document.getElementById("count-el") // <- pasar argumento!!
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-el")


function increment() {
    count += 1
    countEl.innerText = count
    
}

function decrement() {
    count -= 1
    countEl.innerText = count
    
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}
