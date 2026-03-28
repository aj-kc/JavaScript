let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1 
document.getElementById("num2-el").textContent = num2

function add(){
    console.log("Add Clicked")
    document.getElementById("sum-el").textContent = "Sum: "
    sum = num1 + num2
    document.getElementById("sum-el").textContent += sum
}

function subtract(){
    console.log("Subtract Clicked")
    document.getElementById("sum-el").textContent = "Sum: "
    sum = num1 - num2
    document.getElementById("sum-el").textContent += sum
}

function divide(){
    console.log("Divide Clicked")
    document.getElementById("sum-el").textContent = "Sum: "
    sum = num1 / num2
    document.getElementById("sum-el").textContent += sum

}

function multiply(){
    console.log("Multiply Clicked")
    document.getElementById("sum-el").textContent = "Sum: "
    sum = num1 * num2
    document.getElementById("sum-el").textContent += sum
    
}