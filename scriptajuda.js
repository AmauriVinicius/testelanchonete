let expandir = document.querySelector(".expandir")
let recolher = document.querySelector(".recolher")
console.log(expandir)

let g2 = document.querySelector(".alternativaP1")
    g2.classList.add("esconde")

expandir.addEventListener("click",ex)

function ex (){
    expandir.classList.add("esconde")
    recolher.classList.remove("esconde")
    let g2 = document.querySelector(".alternativaP1")
    g2.classList.remove("esconde")

}
recolher.addEventListener("click", rec)
function rec (){
    recolher.classList.add("esconde")
    expandir.classList.remove("esconde")
    
    let g2 = document.querySelector(".alternativaP1")
    g2.classList.add("esconde")
}




let e1 = document.querySelector(".e1")
let r1 = document.querySelector(".r1")
e1.addEventListener("click",ee1)
function ee1(){
    let resposta1 = document.querySelector(".resposta1")
    resposta1.classList.remove("esconde")
    e1.classList.add("esconde")
    r1.classList.remove("esconde")
}
r1.addEventListener("click",rr1)
function rr1(){
    let resposta1 = document.querySelector(".resposta1")
    resposta1.classList.add("esconde")
    r1.classList.add("esconde")
    e1.classList.remove("esconde")
}