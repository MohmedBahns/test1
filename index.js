






function addTask(){
    let input =document.querySelector("input");
let task = input.value;
let ol =document.querySelector("ol");
ol.innerHTML += `<li>${task}</li>`;
input.value = "";   
}














