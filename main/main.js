const barBtn = document.querySelector(".bar");
const bar = document.querySelector("#bar-menu");
let openMenu = false; 

barBtn.addEventListener("click", () => {
  if (!openMenu) {
    bar.classList.remove("hidden");
    bar.classList.add("block");
    openMenu = true; 
  } else {
    bar.classList.remove("block");
    bar.classList.add("hidden");
    openMenu = false;
  }
});