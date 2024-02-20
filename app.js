const header = document.querySelector(".main-header");
const togglebtn = document.querySelector(".menu-icon");


togglebtn.addEventListener('click',(e)=>{
    header.classList.toggle('active')
});