gsap.registerPlugin();

// Elementos
const overviewBtn = document.getElementById("overview-btn");
const bottomSheet = document.getElementById("bottom-sheet");
const overlay = document.getElementById("overlay");
const closeBar = document.getElementById("close-bar");

// Timeline GSAP (pausada, controlable)
const sheetTl = gsap.timeline({ paused: true });
const menubtnOverlay = gsap.timeline ({pause:true})
// Definimos la animación: overlay + bottom sheet
sheetTl
  .to(overlay, { 
    duration: 0.3, 
    opacity: 1, 
    display: "block", 
    ease: "power2.out" 
  }, 0)
  .to(bottomSheet, { 
    duration: 0.4, 
    y: "0", 
    ease: "power3.out" 
  }, 0);
// Abrir menú
overviewBtn.addEventListener("click", () => {
  sheetTl.play();
});

// Cerrar menú
function closeMenu() {
  sheetTl.reverse();
}
closeBar.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);




