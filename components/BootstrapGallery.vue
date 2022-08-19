<script>
export default {
  data() {
    return {
      imageSource: "",
      imageTitle: "",
    }
  },
  props: ["images"],
  methods: {
    callFunction: function (event) {
      this.imageSource = event.target.getAttribute("item")
      this.imageTitle = event.target.getAttribute("title")
    },
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
        <div class="col" v-for="photo in images">
          <img
            :src="photo.image"
            class="gallery-item"
            alt=""
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="callFunction"
            :item="photo.image"
            :title="photo.title"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ imageTitle }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img :src="imageSource" />
        </div>
      </div>
    </div>
  </div>
</template>
