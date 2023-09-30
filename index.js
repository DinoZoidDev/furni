const menuButton = document.getElementById("menu");

const toggleModal = () => {
  document.body.dataset.mobileMenu =
    document.body.dataset.mobileMenu === "opened" ? "closed" : "opened";
};

menuButton?.addEventListener("pointerdown", toggleModal);
