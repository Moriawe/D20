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
        {
          id: 10,
          image: "/img/kakkullen/singoalla-5weeks.jpg",
          title: "Singoalla 23/8 2022",
        },
        {
          id: 11,
          image: "/img/kakkullen/singoalla1-7weeks.jpg",
          title: "Singoalla 7/9 2022",
        },
        {
          id: 12,
          image: "/img/kakkullen/singoalla2-7weeks.jpg",
          title: "Singoalla 7/9 2022",
        },
        {
          id: 13,
          image: "/img/kakkullen/singoalla3-7weeks.jpg",
          title: "Singoalla 8/9 2022",
        },
        {
          id: 14,
          image: "/img/kakkullen/20220930_singoalla.jpg",
          title: "Singoalla 30/9 2022",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container-md">
    <h1>D20's Singoalla the Bard</h1>

    <p>
      Singoalla blev tidigt k??rleksfullt d??pt till ???pipsillen??? eftersom hon hade
      det ljudligaste pipet av ungarna. Hon ??r fortfarande duktig p?? att ber??tta
      var hon ??r och om hon vill n??got.
    </p>
    <p>
      Singo har ocks?? visat sig ??rvt sin mammas intelligens d?? det ??r f?? problem
      hon st??lls inf??r som hon inte kan klura ut. Hon tycker ocks?? om att
      uppt??cka nya skrymslen och vr??r i huset. Hon har visat sig vara en riktig
      utforskare och kommer nog bli en riktigt bra ??ventyrskatt. Hon gillar att
      ha p?? sig selen och ge sig ut p?? ??ventyr i huset.
    </p>
    <p>
      ??ven Singoalla tycker om n??rhet och gos och har ett riktigt mysigt
      purrande.
    </p>
    <h2>Galleri</h2>

    <BootstrapGallery :images="pictures" />
  </div>
</template>
