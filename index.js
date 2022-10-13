const frame = document.querySelector("#frame");
const frameImage = document.querySelector("#frame-image");
const main = document.querySelector("#main-section");
const columnImages = document.querySelector("#column-images");

console.log(main.getBoundingClientRect().width);
console.log(main.getBoundingClientRect().height);

const moveFrame = e => {
  const x = (e.clientX / window.innerWidth) * 100 - 50;
  const y = (e.clientY / window.innerHeight) * 100 - 50;

  frameImage.style.transform = `translateX(${x}px) translateY(${y}px)`;
};

main.addEventListener("mousemove", moveFrame);

///////////////////////////////////////////////
// const caption = document.querySelector("#caption");
// gsap.to(caption, {
//   duration: 2,
//   text: { value: "This is the new text", delimiter: " " },
//   ease: "none",
// });
