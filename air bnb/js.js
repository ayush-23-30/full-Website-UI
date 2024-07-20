let main = document.querySelector(".main-hu-main")
let  crsr = document.querySelector(".cursor")
console.log(crsr);

main.addEventListener("mousemove",(i)=>{
    console.log(i);


    crsr.style.left = i.x +"px";
    crsr.style.top = i.y +"px";

})