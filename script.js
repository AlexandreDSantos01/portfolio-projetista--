const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

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

const galleryImages = document.querySelectorAll(".category-item img");

if (galleryImages.length) {
  let currentImageIndex = 0;
  const imageList = Array.from(galleryImages);
  const modal = document.createElement("div");
  modal.className = "image-modal";
  modal.innerHTML = `
    <button class="image-modal-close" type="button" aria-label="Fechar imagem">&times;</button>
    <button class="image-modal-nav image-modal-prev" type="button" aria-label="Imagem anterior">&lsaquo;</button>
    <img alt="">
    <button class="image-modal-nav image-modal-next" type="button" aria-label="Proxima imagem">&rsaquo;</button>
    <div class="image-modal-caption"></div>
    <div class="image-modal-counter"></div>
  `;

  document.body.appendChild(modal);

  const modalImage = modal.querySelector("img");
  const modalCaption = modal.querySelector(".image-modal-caption");
  const modalCounter = modal.querySelector(".image-modal-counter");
  const closeButton = modal.querySelector(".image-modal-close");
  const prevButton = modal.querySelector(".image-modal-prev");
  const nextButton = modal.querySelector(".image-modal-next");

  const showImage = (index) => {
    currentImageIndex = (index + imageList.length) % imageList.length;
    const image = imageList[currentImageIndex];
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    const figure = image.closest("figure");
    const groupName = figure?.dataset.projectGroup || "";
    const imageName = figure?.querySelector("figcaption")?.textContent || "";
    modalCaption.textContent = [groupName, imageName].filter(Boolean).join(" - ");
    modalCounter.textContent = `${currentImageIndex + 1} / ${imageList.length}`;
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modalImage.removeAttribute("src");
  };

  const openModal = (index) => {
    showImage(index);
    modal.classList.add("is-open");
  };

  imageList.forEach((image, index) => {
    image.addEventListener("click", () => {
      openModal(index);
    });
  });

  closeButton.addEventListener("click", closeModal);
  prevButton.addEventListener("click", () => showImage(currentImageIndex - 1));
  nextButton.addEventListener("click", () => showImage(currentImageIndex + 1));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("is-open")) return;
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") showImage(currentImageIndex - 1);
    if (event.key === "ArrowRight") showImage(currentImageIndex + 1);
  });
}
