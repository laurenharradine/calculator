let input = "0"
let lastClickEquals = false

let btn = document.getElementsByClassName("button");
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', getButton, false);
}

function getButton (){

    
    if (this.classList.contains("clear")){
        console.log("Clearing...")
        input = "0"
        lastClickEquals = false
    }
    else if (this.classList.contains("equals")){
        console.log("Time to evaluate...")
        input = parseStr(input) // add function here to parse string
        lastClickEquals = true
    }
    else if (!this.classList.contains("number")){
        input += checkOperand(this)
        lastClickEquals = false
    }
    else {
        if (lastClickEquals) input = this.innerHTML
        else input += this.innerHTML
        lastClickEquals = false
    }
    console.log (`Input: ${input}`)
    let screen = document.querySelector(".calc-screen")
    screen.innerHTML = input

    // Start from zero if we just evaluated a string
}

function checkOperand(op) {
    let operand = ""
    if (op.classList.contains("plus")){
        console.log("Plus")
        operand = "+"
    }
    else if (op.classList.contains("minus")){
        console.log("Minus")
        operand = "-"
    }
    else if (op.classList.contains("multiply")){
        console.log("Multiply")
        operand = "*"
    }
    else { //it's a divide
        console.log("Divide")
        operand = "/"
    }
    return operand
}

function parseStr (str){
    // check if string begins wiht an operand; if so, unshift a zero onto front of string.
    let strArr = str.split("")

    if (!isNumber(Number(strArr[0]))){
        strArr.unshift('0')
        str=strArr.join("")
    }

    console.log(str)

    return Function(`'use strict'; return (${str})`)()
}

function isNumber(char) {
    return /^[0-9]+$/.test(char);
}