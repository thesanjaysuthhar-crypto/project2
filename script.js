function openPopup(src){

document.getElementById("popup").style.display="flex"

document.getElementById("popup-img").src = src

}

function closePopup(){

document.getElementById("popup").style.display="none"

}

const menuBtn = document.querySelector(".menu-toggle")
const nav = document.querySelector("nav")

menuBtn.onclick = () => {

nav.classList.toggle("active")

}
