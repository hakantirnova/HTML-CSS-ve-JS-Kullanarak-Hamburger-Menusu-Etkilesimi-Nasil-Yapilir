let menuBox = document.querySelector("#menuBox")
let menuIcon = document.querySelector("#menuIcon")

menuIcon.onclick = function () {
  menuBox.classList.toggle("open-menu")

  if (menuBox.classList.contains("open-menu")) {
    menuIcon.src = "images/close.png"
  }
  else {
    menuIcon.src = "images/menu.png"
  }
}