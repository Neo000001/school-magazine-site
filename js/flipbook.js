const flipbook = document.getElementById("flipbook");
const totalPages = 100;
let currentPage = 1;
const sound = document.getElementById("flipSound");

function render() {
  flipbook.innerHTML = "";
  let left = document.createElement("div");
  let right = document.createElement("div");
  left.className = right.className = "page";
  left.style.backgroundImage = `url(pages/page${currentPage}.jpg)`;
  right.style.backgroundImage = `url(pages/page${currentPage+1}.jpg)`;
  left.style.left="0"; right.style.left="50%";
  flipbook.append(left,right);
  pageNo.innerText = currentPage;
}

function nextPage(){ if(currentPage<totalPages-1){currentPage+=2; sound.play(); render();}}
function prevPage(){ if(currentPage>1){currentPage-=2; sound.play(); render();}}

render();

