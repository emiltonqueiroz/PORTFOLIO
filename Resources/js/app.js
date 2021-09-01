/*====== NAVIGATION SECTION ======*/
const doc = document;
const menuOpen = doc.querySelector(".burger");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlayactive");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlayactive");
});

/*====== SCROLL REVEAL SECTION ======*/

/*Box1*/
const lReveal = ScrollReveal({
  duration: 2500,
  origin: "left",
  reset: false,
});

lReveal.reveal(".sos", { distance: "120px", delay: 600 });
lReveal.reveal(".box1", { distance: "300px", delay: 350 });

/*Box2*/
const rReveal = ScrollReveal({
  duration: 2500,
  origin: "right",
  reset: false,
});

rReveal.reveal(".box2", { distance: "300px", delay: 350 });

/*====== Project Section ======*/
const sreveal = ScrollReveal({
  duration: 2000,
  origin: "left",
  reset: false,
});

/*Imgs*/
sreveal.reveal(".project-img", { distance: "100px", delay: 300 });

/*Data*/
sreveal.reveal(".project-txt", { distance: "150px", delay: 500 });

/*====== Service Section ======*/
const slideUp = {
  distance: "100%",
  origin: "bottom",
  delay: 200,
};
ScrollReveal().reveal(".serviceBox", slideUp);
ScrollReveal().reveal(".serviceBox", { interval: 300 });
