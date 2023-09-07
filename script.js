const rollNoInput = document.getElementById('roll--no')
const gameInput = document.getElementById('game')
const feeStructInput = document.getElementById('fee--struct')
const feesInput = document.getElementById('fees')
const inputs = [rollNoInput, gameInput, feeStructInput, feesInput]

function submit(){
    inputs.forEach((ele) => console.log(ele.value))
}