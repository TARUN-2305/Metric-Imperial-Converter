let magnitude = document.getElementById("magnitude")
let length = document.getElementById("item1_value")
let volume = document.getElementById("item2_value")
let mass = document.getElementById("item3_value")
let num = 1
lengthify(num)
volumify(num)
massify(num)

function lengthify(n){
    length.textContent = `${n} meter = ${(n*3.281).toFixed(3)} feet | ${n} feet = ${(n*0.3048).toFixed(3)} meter` 
}
function volumify(n){
    volume.textContent = `${n} liter = ${(n*0.264).toFixed(3)} gallon | ${n} gallon = ${(n*3.7854).toFixed(3)} liter`
}
function massify(n){
    mass.textContent  = `${n} kilogram = ${(n*2.204).toFixed(3)} pound | ${n} pound = ${(n*0.4536).toFixed(3)} kilogram`
}

document.getElementById("convertbtn").addEventListener("click",function(){
    num = magnitude.value 
    lengthify(num)
    volumify(num)
    massify(num)
})

magnitude.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        num = magnitude.value 
        lengthify(num)
        volumify(num)
        massify(num)
    }
})