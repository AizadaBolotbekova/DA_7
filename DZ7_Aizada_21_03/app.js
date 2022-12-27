const input1 = document.querySelector("#num_one");
const input2 = document.querySelector("#num_two");
const output = document.querySelector("span");
const plus = document.querySelector("#button_calculator_1");
const minus = document.querySelector("#button_calculator_2");
const del = document.querySelector("#button_calculator_3");
const umn = document.querySelector("#button_calculator_4");
const restart = document.querySelector("#restart");
plus.addEventListener("click",function (){
    let sumPlus = Number(input1.value) + Number(input2.value);
    output.innerHTML = sumPlus;
})

minus.addEventListener("click",function (){
    let summinus = Number(input1.value) - Number(input2.value);
    output.innerHTML = summinus;
})
del.addEventListener("click",function (){
    let sumdel = Number(input1.value) / Number(input2.value);
    output.innerHTML = sumdel;
})
umn.addEventListener("click",function (){
    let sumumn = Number(input1.value) * Number(input2.value);
    output.innerHTML = sumumn;
})

restart.addEventListener("click",function (){
   input1.value = "";
   input2.value = "";
    output.innerHTML = "";
})
