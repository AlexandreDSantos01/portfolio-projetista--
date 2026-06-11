const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");
const year = document.querySelector("#year");
const ambientVideo = document.querySelector(".ambient-video");

year.textContent = new Date().getFullYear();

if (ambientVideo) {
  ambientVideo.playbackRate = 0.65;
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
