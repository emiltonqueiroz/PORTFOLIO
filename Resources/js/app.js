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

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.from(".red", {x: "50%", duration: 1.8,  delay:1.2 });
tl.from(".yellow", {opacity:"0",x: "-30%", delay:1.2, duration:"1.7"}, {opacity:"1", x: "0%", duration:2});