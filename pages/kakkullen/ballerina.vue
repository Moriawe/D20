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
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container-md">
    <h1>D20's Ballerina</h1>

    <p>
      Båda tortisarna verkar brås på sin mor och är lite mindre i storleken. Det
      är dock inget som hindrar Ballerina från att ge sig ut på upptäcksfärd
      eller ryggbrottas med människohänder i närheten. En riktig mystjej!
    </p>
    <p>
      Ballerina är en riktig äventyrare och alltid försten ut ur pölen för att
      utforska rummet utanför. Hon är helt orädd och en grymt bra klättrare.
    </p>

    <h2>Galleri</h2>

    <BootstrapGallery :images="pictures" />
  </div>
</template>
