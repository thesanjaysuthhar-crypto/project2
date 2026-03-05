// Mobile Menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
  });
}

// Projects popup only on projects page
const projects = [
  {
    title: "KAMLA ENCLAVE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgs: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    title: "BABA SPINNERS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgs: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092919535-7146d6fcf1d6?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    title: "KAMLA BOUTIQUE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgs: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    title: "KAMLA CRYSTALS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgs: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2000&auto=format&fit=crop"
    ]
  }
];

const projectGrid = document.getElementById("projectGrid");

if (projectGrid) {
  projects.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "projectCard";
    card.innerHTML = `
      <img src="${p.imgs[0]}" alt="${p.title}">
      <div class="projectInfo">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="projectAction">
          <div class="arrowBtn">➜</div>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(idx));
    projectGrid.appendChild(card);
  });
}

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentProject = 0;
let currentImgIndex = 0;

function openModal(projectIndex) {
  if (!modal) return;
  currentProject = projectIndex;
  currentImgIndex = 0;
  modal.classList.add("show");
  modalImg.src = projects[currentProject].imgs[currentImgIndex];
}
function closeModal() {
  modal.classList.remove("show");
}
function prevImg() {
  const arr = projects[currentProject].imgs;
  currentImgIndex = (currentImgIndex - 1 + arr.length) % arr.length;
  modalImg.src = arr[currentImgIndex];
}
function nextImg() {
  const arr = projects[currentProject].imgs;
  currentImgIndex = (currentImgIndex + 1) % arr.length;
  modalImg.src = arr[currentImgIndex];
}

if (modalClose) modalClose.addEventListener("click", closeModal);
if (prevBtn) prevBtn.addEventListener("click", prevImg);
if (nextBtn) nextBtn.addEventListener("click", nextImg);

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}
