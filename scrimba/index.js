let count = 0 

function increment(){
    count = count + 1
    document.getElementById("count-el").textContent = count
}
 
function save(){
    let saved = (count + " - ")
    document.getElementById("save-el").textContent += saved
    console.log(count)

    count = 0 
    document.getElementById("count-el").textContent = count
}
 