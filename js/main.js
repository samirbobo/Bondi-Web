let boxsPhoto = document.querySelectorAll(".our-work .row .for");
let ULboxs = document.querySelectorAll(".our-work ul li");
ULboxs.forEach(e => {
  e.addEventListener("click", remove);
  e.addEventListener("click", show);
})

function remove() {
  ULboxs.forEach(e => {
    e.classList.remove("main-btn");
    this.classList.add("main-btn");
  })
}

function show() {
  boxsPhoto.forEach(e => {
    e.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach(ele => {
    ele.style.display = "block";
  });
}