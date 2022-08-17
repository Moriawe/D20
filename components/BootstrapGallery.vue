<script>
export default {
  data() {
    return {
      modalShow: false,
    }
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

.gallery {
  padding: 80px, 0;
}

.gallery img {
  background-color: #ffffff;
  padding: 15px;
  width: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

#gallery-modal .modal-img {
  width: 100%;
}
</style>

<template>
  <section class="gallery min-vh-100">
    <div class="container-lg">
      <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-sm-3">
        <div class="col">
          <img
            src="/img/kakkullen/20220804_brago2.jpg"
            class="gallery-item"
            alt=""
          />
        </div>
        <div class="col">
          <img
            src="/img/kakkullen/20220804_brago2.jpg"
            class="gallery-item"
            alt=""
          />
        </div>
        <div class="col">
          <img
            src="/img/kakkullen/20220804_brago2.jpg"
            class="gallery-item"
            alt=""
          />
        </div>
        <div class="col">
          <img
            src="/img/kakkullen/20220804_brago2.jpg"
            class="gallery-item"
            alt=""
          />
        </div>
        <div class="col">
          <img
            src="/img/kakkullen/20220804_brago2.jpg"
            class="gallery-item"
            alt=""
          />
        </div>
        <div class="col">
          <img
            src="/img/kakkullen/20220804_brago2.jpg"
            class="gallery-item"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <div>
    <button @click="modalShow = !modalShow">Open Modal</button>

    <modal v-model="modalShow">Hello From Modal!</modal>
  </div>
</template>
