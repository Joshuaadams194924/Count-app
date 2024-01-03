
let resetBtn = document.getElementById("reset-btn")
let saveData = document.getElementById("save-data")
let total = document.getElementById("total")
let count = 0

console.log(saveData)


function add() {
    count += 1
// += is equal to count + count


total.textContent = count
}
function subtract() {
    count += -1


total.textContent = count
}

function save() {
    let countstr = count + " , "
    saveData.textContent += countstr
   total.textContent = 0
    count = 0

    console.log(count)

}


function reset(){

total.textContent = 0
    saveData.textContent = 0
    count = 0

    console.log(count)

   
}






