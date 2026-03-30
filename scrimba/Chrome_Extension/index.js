let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

function renderLeads() {
  ulEl.innerHTML = ""
  for (let i = 0; i < myLeads.length; i++) {
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.appendChild(li)
    console.log(myLeads[i])
  }
}

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
  renderLeads()
})