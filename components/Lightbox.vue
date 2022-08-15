<script>
// Code from DCode - youtube.com/watch?v=dylA5Onz3kI

export default class Lightbox {
  static activate() {
    /*  document.body.insertAdjacentHTML(
      "beforeend",
      `
          <div class="lightbox" id="lightbox" style="display: none;">
              <div class="lightbox__inner">
                  <button type="button" class="lightbox__close">
                      &times;
                  </button>
                  <div class="lightbox__content"></div>
              </div>
          </div>
      `
    ) */

    const lightBox = document.querySelector("#lightbox")
    const btnClose = lightBox.querySelector(".lightbox__close")
    const content = lightBox.querySelector(".lightbox__content")
    const closeLightbox = () => {
      lightBox.style.display = "none"
      content.innerHTML = ""
    }

    lightBox.addEventListener("mousedown", (e) => {
      if (e.target.matches("#lightbox")) {
        closeLightbox()
      }
    })

    btnClose.addEventListener("click", () => {
      closeLightbox()
    })
  }

  static show(htmlOrElement) {
    const content = document.querySelector("#lightbox .lightbox__content")

    document.querySelector("#lightbox").style.display = null

    if (typeof htmlOrElement === "string") {
      content.innerHTML = htmlOrElement
    } else {
      content.innerHTML = ""
      content.appendChild(htmlOrElement)
    }
  }
}

Lightbox.activate()
Lightbox.show("<p>lightbox contents</p>")
</script>

<style>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 15px;
}

.lightbox__inner {
  position: relative;
  width: 100%;
  max-width: 800px;
  min-height: 100px;
  background: white;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
}

.lightbox__close {
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 10px;
  font-size: 40px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
}

.lightbox__close:hover {
  color: rgba(0, 0, 0, 0.8);
}
</style>

<template>
  <div class="lightbox" id="lightbox" style="display: none">
    <div class="lightbox__inner">
      <button type="button" class="lightbox__close">&times;</button>
      <div class="lightbox__content"></div>
    </div>
  </div>
</template>
