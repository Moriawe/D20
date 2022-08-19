<script>
export default {
  data() {
    return {
      pictures: [
        {
          id: 1,
          image: "/img/kakkullen/20220804_brago0.jpg",
          title: "Brago 4/8 2022",
        },
        {
          id: 2,
          image: "/img/kakkullen/20220804_brago1.jpg",
          title: "Brago 4/8 2022",
        },
        {
          id: 3,
          image: "/img/kakkullen/20220804_brago2.jpg",
          title: "Brago 4/8 2022",
        },
        {
          id: 4,
          image: "/img/kakkullen/20220804_brago3.jpg",
          title: "Brago 4/8 2022",
        },
        {
          id: 5,
          image: "/img/kakkullen/brago1-4weeks.jpg",
          title: "Brago 16/8 2022",
        },
        {
          id: 6,
          image: "/img/kakkullen/brago2-4weeks.jpg",
          title: "Brago 16/8 2022",
        },
        {
          id: 7,
          image: "/img/kakkullen/brago3-4weeks.jpg",
          title: "Brago 16/8 2022",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container-md">
    <h1>D20's Brago</h1>

    <p>
      Största flickan är en riktig brottare och knör gärna undan de andra för
      den bästa platsen. Hon ogillar dock att äventyra utanför lådan utan håller
      sig gärna med mamma.
    </p>

    <h2>Galleri</h2>
    <BootstrapGallery :images="pictures" />
  </div>
</template>
