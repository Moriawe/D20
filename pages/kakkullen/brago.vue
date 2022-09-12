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
        {
          id: 8,
          image: "/img/kakkullen/brago1-5weeks.jpg",
          title: "Brago 23/8 2022",
        },
        {
          id: 9,
          image: "/img/kakkullen/brago2-5weeks.jpg",
          title: "Brago 23/8 2022",
        },
        {
          id: 10,
          image: "/img/kakkullen/brago1-7weeks.jpg",
          title: "Brago 7/9 2022",
        },
        {
          id: 11,
          image: "/img/kakkullen/brago2-7weeks.jpg",
          title: "Brago 7/9 2022",
        },
        {
          id: 12,
          image: "/img/kakkullen/brago3-7weeks.jpg",
          title: "Brago 7/9 2022",
        },
        {
          id: 13,
          image: "/img/kakkullen/brago4-7weeks.jpg",
          title: "Brago 8/9 2022",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container-md">
    <h1>D20's Brago the Barbarian</h1>

    <p>
      Största flickan är en riktig brottare och knör gärna undan de andra för
      den bästa platsen. Hon ogillar dock att äventyra utanför lådan utan håller
      sig gärna med mamma.
    </p>
    <p>
      Nu är Brago större och tuffare. Hon är en mästare på att klättra (och
      rymma) och tar sig gärna upp i soffan och spanar ut över sitt
      drottningdömme. Favoritleksakerna är bollar.
    </p>
    <p>
      Brago har även utvecklat en mjukare sida där hon gärna kryper upp i knät
      och är med eller tittar på film.
    </p>

    <h2>Galleri</h2>
    <BootstrapGallery :images="pictures" />
  </div>
</template>
