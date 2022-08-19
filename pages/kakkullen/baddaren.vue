<script>
export default {
  data() {
    return {
      pictures: [
        {
          id: 1,
          image: "/img/kakkullen/20220804_baddaren0.jpg",
          title: "Baddaren 4/8 2022",
        },
        {
          id: 2,
          image: "/img/kakkullen/20220804_baddaren2.jpg",
          title: "Baddaren 4/8 2022",
        },
        {
          id: 3,
          image: "/img/kakkullen/20220804_baddaren3.jpg",
          title: "Baddaren 4/8 2022",
        },
        {
          id: 4,
          image: "/img/kakkullen/20220804_baddaren4.jpg",
          title: "Baddaren 4/8 2022",
        },
        {
          id: 5,
          image: "/img/kakkullen/20220804_baddaren5.jpg",
          title: "Baddaren 4/8 2022",
        },
        {
          id: 6,
          image: "/img/kakkullen/baddaren4-4weeks.jpg",
          title: "Baddaren 16/8 2022",
        },
        {
          id: 7,
          image: "/img/kakkullen/baddaren2-4weeks.jpg",
          title: "Baddaren 16/8 2022",
        },
        {
          id: 8,
          image: "/img/kakkullen/baddaren3-4weeks.jpg",
          title: "Baddaren 16/8 2022",
        },
        {
          id: 9,
          image: "/img/kakkullen/baddaren1-4weeks.jpg",
          title: "Baddaren 16/8 2022",
        },
        {
          id: 10,
          image: "/img/kakkullen/baddaren5-4weeks.jpg",
          title: "Baddaren 16/8 2022",
        },
      ],
    }
  },
}
</script>
baddaren2-4weeks
<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.thumb {
  width: 200px;
}
</style>

<template>
  <div class="container-md">
    <h1>D20's Baddaren</h1>

    <h2>3 veckor</h2>
    <p>
      Förstfödd, störst och enda hanen så gör Baddaren skäl för sitt namn. Han
      är lugn och trygg och utforskar gärna omvärlden. När han inte utforskar
      marken utanför bolådan snuttar han gärna hos mamma och somnar med nappen i
      munnen.
    </p>

    <BootstrapGallery :images="pictures" />
  </div>
</template>
