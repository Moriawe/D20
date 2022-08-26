<script>
export default {
  data() {
    return {
      pictures: [
        {
          id: 1,
          image: "/img/kakkullen/20220804_singoalla0.jpg",
          title: "Singoalla 4/8 2022",
        },
        {
          id: 2,
          image: "/img/kakkullen/20220804_singoalla1.jpg",
          title: "Singoalla 4/8 2022",
        },
        {
          id: 3,
          image: "/img/kakkullen/20220804_singoalla3.jpg",
          title: "Singoalla 4/8 2022",
        },
        {
          id: 4,
          image: "/img/kakkullen/20220804_singoalla2.jpg",
          title: "Singoalla 4/8 2022",
        },
        {
          id: 5,
          image: "/img/kakkullen/Singoalla-Dice-1-small.jpg",
          title: "Singoalla 4/8 2022",
        },
        {
          id: 6,
          image: "/img/kakkullen/singoalla1-4weeks.jpg",
          title: "Singoalla 16/8 2022",
        },
        {
          id: 7,
          image: "/img/kakkullen/singoalla2-4weeks.jpg",
          title: "Singoalla 16/8 2022",
        },
        {
          id: 8,
          image: "/img/kakkullen/singoalla3-4weeks.jpg",
          title: "Singoalla 16/8 2022",
        },
        {
          id: 9,
          image: "/img/kakkullen/singoalla4-4weeks.jpg",
          title: "Singoalla 16/8 2022",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container-md">
    <h1>D20's Singoalla</h1>

    <p>
      Tjejen med den gällaste rösten och en riktig sötlök. Sticker ibland ut
      huvudet ur bolådan men brottas mest med syrran Brago.
    </p>
    <p>
      Singo som vi kallar henne tycker om att leka med mammas svans och en av
      farbror Skuggans luddormar och fiskespöt (utan leksak på).
    </p>

    <h2>Galleri</h2>

    <BootstrapGallery :images="pictures" />
  </div>
</template>
