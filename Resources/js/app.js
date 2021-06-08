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
tl.from(".box1", {x: "70%", delay:"1.2", duration: "1.8"});
tl.from(".box2", {opacity:"0",x: "-50%", delay:"1.2",duration:"1.8"}, {opacity:"1", x: "0%"});
tl.from(".fab", {opacity:"0", x: "-100%",  delay:"1.2", duration: "1.8"}, {opacity:"1", x: "0%"});


