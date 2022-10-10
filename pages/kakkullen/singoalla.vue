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
      Singoalla blev tidigt kärleksfullt döpt till “pipsillen” eftersom hon hade
      det ljudligaste pipet av ungarna. Hon är fortfarande duktig på att berätta
      var hon är och om hon vill något.
    </p>
    <p>
      Singo har också visat sig ärvt sin mammas intelligens då det är få problem
      hon ställs inför som hon inte kan klura ut. Hon tycker också om att
      upptäcka nya skrymslen och vrår i huset. Hon har visat sig vara en riktig
      utforskare och kommer nog bli en riktigt bra äventyrskatt. Hon gillar att
      ha på sig selen och ge sig ut på äventyr i huset.
    </p>
    <p>
      Även Singoalla tycker om närhet och gos och har ett riktigt mysigt
      purrande.
    </p>
    <h2>Galleri</h2>

    <BootstrapGallery :images="pictures" />
  </div>
</template>
