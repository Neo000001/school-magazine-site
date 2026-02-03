function openBook() {
  document.querySelector(".book").classList.add("open");

  // show loader after book starts opening
  setTimeout(() => {
    document.getElementById("loader").classList.add("show");
  }, 600);

  // go to home page after animation
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1600);
}
