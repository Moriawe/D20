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
        {
          id: 11,
          image: "/img/kakkullen/baddaren-5weeks.jpg",
          title: "Baddaren 23/8 2022",
        },
        {
          id: 12,
          image: "/img/kakkullen/baddaren2-5weeks.jpg",
          title: "Baddaren 2/9 2022",
        },
        {
          id: 13,
          image: "/img/kakkullen/baddaren1-7weeks.jpg",
          title: "Baddaren 7/9 2022",
        },
        {
          id: 14,
          image: "/img/kakkullen/baddaren2-7weeks.jpg",
          title: "Baddaren 7/9 2022",
        },
        {
          id: 15,
          image: "/img/kakkullen/baddaren3-7weeks.jpg",
          title: "Baddaren 8/9 2022",
        },
        {
          id: 16,
          image: "/img/kakkullen/baddaren4-7weeks.jpg",
          title: "Baddaren 8/9 2022",
        },
        {
          id: 17,
          image: "/img/kakkullen/baddis.jpg",
          title: "Baddaren 25/9 2022",
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
    <h1>D20's Baddaren the Paladin</h1>

    <p>
      Baddaren tackar aldrig nej till lite bustid. Han gillar i stort sett alla
      leksaker men hans favorit ??r sm?? bomullsbollar som han b??r omkring i
      munnen och jagar runt. P?? kv??llarna drabbas han av kv??llszoomies och
      flyger runt huset i jakt p?? sina systrar.
    </p>
    <p>
      N??r han blir tr??tt kryper han g??rna upp t??tt intill en m??nniska f??r lite
      v??rme och gos. Purrandet h??rs flera rum bort! Baddaren ??r ??ven r??tt pratig
      (han l??ter lite som en sn??ll velociraptor).
    </p>
    <h2>Galleri</h2>
    <BootstrapGallery :images="pictures" />
  </div>
</template>
