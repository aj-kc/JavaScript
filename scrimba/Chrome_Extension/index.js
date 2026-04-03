let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""

  localStorage.setItem("myLeads", JSON.stringify(myLeads))

  console.log(localStorage.getItem("myLeads"))
  renderLeads()
})

function renderLeads()
{
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItems +=
         `<li>
            <a target = '_blank' href = '${myLeads[i]}'>
                 ${myLeads[i]}
            </a>
          </li>`
   
        localStorage.setItem("myLeads", `${myLeads[i]}`)
        localStorage.getItem("myLeads")    
        localStorage.clear()
        }

    ulEl.innerHTML = listItems
}

