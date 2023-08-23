import e from 'cors';
import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

let input = document.getElementById("input1");
input.addEventListener("focus", (e) => {
    e.target.style.border = "2px solid red"
});

input.addEventListener("blur", (e) => {
    e.target.style.border = "2px solid black"
});

window.addEventListener("blur", () => {
    document.querySelector("body").style.backgroundColor= "red";
}); 
window.addEventListener("blur", (e) => {
    document.querySelector("body").style.backgroundColor= "white";
});

input.addEventListener("resize", (e) => {
    input.value = '$(window.innerWidth) x $(window.innerHeight)' ;
});


input.addEventListener("keydown", (e) => {
    if(e.key==1){
        input.style.boder= "10px solid blue";
    }
});

document.querySelector("h1").addEventListener("click", function(e) {
    alert("Bana tıklayın!");
});

const body = document.querySelector("body");
window.addEventListener("load", e =>{
    body.style.background = "red";
});

const images = document.querySelectorAll("img");
images.forEach((s) => {
    s.addEventListener("mouseover", (event) =>{
        s.style.filter="grayscale(100%)";
    });
    
    s.addEventListener("mouseleave", (event) =>{
        s.style.filter="unset";
    });
});

const img2 = document.getElementById("img-2")
img2.addEventListener("dragstart", (ev) => {
    ev.dataTransfer.setData("Text", ev.target.id);

});

const p1 = document.getElementById("p1");
p1.addEventListener("drop", (ev) => {
    let data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
});

img1.addEventListener("dragover",(ev) => {
    ev.preventDefault();
});

