let btnclick = document.getElementById("clickme");
let pmes = document.getElementById("message");
let newevent = document.createElement("message");
newevent.textContent = "haha";
     
btnclick.addEventListener("click",alo);

function alo(){
    pmes.style.background ="red";
    pmes.textContent = "ua";
} 
