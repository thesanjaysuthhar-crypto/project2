const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close-btn");

// Image Click Function
document.querySelectorAll(".gallery-img").forEach(img => {
    img.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }
});

// Close Click Function
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close on outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close-btn");
document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex";
        modalImg.src = this.src; // 
        modalImg.style.animation = "zoom 0.3s ease"; 
    });
});
closeBtn.onclick = () => {
    modal.style.display = "none";
};
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};
