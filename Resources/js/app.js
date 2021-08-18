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


const gs = gsap.timeline({ defaults: { ease: "power1.out" } });

gs.from(".box1", {x: "75%", delay:"1.2", duration: "1.8"});

gs.from(".box2", {opacity:"0",x: "-70%", delay:"1.2",duration:"1.8"}, {opacity:"1", x: "0%"});

gs.from(".sos", {opacity:"0", x: "-100%",  delay:"1.2", duration: "1.8"}, {opacity:"1", x: "0%"});

/*====== SCROLL REVEAL SECTION ======*/

/*====== Project Section ======*/
const sreveal = ScrollReveal({
  duration: 2000,
  origin: 'left',
  reset: false
});

/*Imgs*/
sreveal.reveal('.project-img',{distance: '100px',delay: 300}); 

/*Data*/
sreveal.reveal('.project-txt',{distance: '150px',delay: 500}); 


/*====== Service Section ======*/
var slideUp = {
  distance: '100%',
  origin: 'bottom',
delay: 200
};
ScrollReveal().reveal('.serviceBox',  slideUp);
ScrollReveal().reveal('.serviceBox', { interval: 300 });
