<script>
export default {
  data() {
    return {
      pictures: [
        {
          id: 1,
          image: "/img/kakkullen/20220804_ballerina0.jpg",
          title: "Ballerina 4/8 2022",
        },
        {
          id: 2,
          image: "/img/kakkullen/20220804_ballerina1.jpg",
          title: "Ballerina 4/8 2022",
        },
        {
          id: 3,
          image: "/img/kakkullen/20220804_ballerina2.jpg",
          title: "Ballerina 4/8 2022",
        },
        {
          id: 4,
          image: "/img/kakkullen/20220804_ballerina3.jpg",
          title: "Ballerina 4/8 2022",
        },
        {
          id: 5,
          image: "/img/kakkullen/ballerina1-4weeks.jpg",
          title: "Ballerina 16/8 2022",
        },
        {
          id: 6,
          image: "/img/kakkullen/ballerina2-4weeks.jpg",
          title: "Ballerina 16/8 2022",
        },
        {
          id: 7,
          image: "/img/kakkullen/ballerina3-4weeks.jpg",
          title: "Ballerina 16/8 2022",
        },
        {
          id: 8,
          image: "/img/kakkullen/ballerina4-4weeks.jpg",
          title: "Ballerina 16/8 2022",
        },
        {
          id: 9,
          image: "/img/kakkullen/ballerina-5weeks.jpg",
          title: "Ballerina 23/8 2022",
        },
        {
          id: 10,
          image: "/img/kakkullen/ballerina2-5weeks.jpg",
          title: "Ballerina 23/8 2022",
        },
        {
          id: 11,
          image: "/img/kakkullen/ballerina-6weeks.jpg",
          title: "Ballerina 24/8 2022",
        },
        {
          id: 12,
          image: "/img/kakkullen/ballerina1-7weeks.jpg",
          title: "Ballerina 7/9 2022",
        },
        {
          id: 13,
          image: "/img/kakkullen/ballerina2-7weeks.jpg",
          title: "Ballerina 7/9 2022",
        },
        {
          id: 14,
          image: "/img/kakkullen/ballerina3-7weeks.jpg",
          title: "Ballerina 7/9 2022",
        },
        {
          id: 15,
          image: "/img/kakkullen/ballerina4-7weeks.jpg",
          title: "Ballerina 8/9 2022",
        },
        {
          id: 16,
          image: "/img/kakkullen/20220930_Ballerina.jpg",
          title: "Ballerina 30/9 2022",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container-md">
    <h1>D20's Ballerina the Rogue</h1>

    <p>
      Ballerina är äventyraren som vågar ge sig iväg utan sina syskons närhet.
      När de var små var hon den första att ge sig iväg utanför boet. Hon tycker
      det är jätteroligt att upptäcka och spana in nya miljöer. Vi tror att
      Ballerina hade kunnat bli en fantastisk äventyrskatt som kan följa med ut
      i koppel om man vore intresserad av det.
    </p>
    <p>
      Hon gillar såklart också att ligga i knät eller på magen och gosa men det
      får man göra när hon är trött.
    </p>
    <p>Favoritleksak: fjädervippan!</p>
    <h2>Galleri</h2>

    <BootstrapGallery :images="pictures" />
  </div>
</template>
