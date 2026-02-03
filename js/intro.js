function openBook() {
  document.querySelector(".book").classList.add("open");
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1200);
}
