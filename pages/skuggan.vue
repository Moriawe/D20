<script>
export default {
  data() {
    return {
      pictures: [
        {
          id: 1,
          image: "/img/skuggan/skuggan_20210108.jpg",
          title: "Ute i snön för första gången (8/1 -21)",
        },
        {
          id: 2,
          image: "/img/skuggan/skuggan_20210806.jpg",
          title: "Skuggans päls (5/8 -21)",
        },

        {
          id: 3,
          image: "/img/skuggan/skuggan_20210630.jpg",
          title: "Lådor är bra! (30/6 -21)",
        },
        {
          id: 4,
          image: "/img/skuggan/skuggan_20210805.jpg",
          title: "Favvoleksaken No 1! (5/8 -21)",
        },
        {
          id: 5,
          image: "/img/skuggan/skuggan_20210511.jpg",
          title: "Favvoleksaken (11/5 -21)",
        },
        {
          id: 6,
          image: "/img/skuggan/skuggan_20210812.jpg",
          title: "Fjäsk (12/8 -21)",
        },
        {
          id: 7,
          image: "/img/skuggan/skuggan_20210813.jpg",
          title: "Mer fjäsk (13/8 -21)",
        },
        {
          id: 8,
          image: "/img/skuggan/skuggan_20211201.jpg",
          title: "Snöpromenad (1/12 -21)",
        },
        {
          id: 9,
          image: "/img/skuggan/skuggan_20220211.jpg",
          title: "Fjäsk och bushyllan (11/2 -22)",
        },
        {
          id: 10,
          image: "/img/skuggan/skuggan_20220221.jpg",
          title: "Skuggan visar att han vill gå ut (21/2 -22)",
        },
        {
          id: 11,
          image: "/img/skuggan/skuggan_20220422.jpg",
          title: "Matte är fånig (22/4 -22)",
        },
        {
          id: 12,
          image: "/img/skuggan/skuggan_20220507.jpg",
          title: "Testar kakans åkbur (7/5 -22)",
        },
        {
          id: 13,
          image: "/img/skuggan/skuggan_20220731.jpg",
          title:
            "Skuggans favvo-mini-människa är borta på scoutläger. Tröstar sig hos matte. (31/7 -20)",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container-md">
    <h1>
      Skuggan

      <a
        href="https://www.pawpeds.com/db/?a=p&id=1521109&g=4&p=eur&o=elastic"
        target="_blank"
        ><img class="pedigree" src="/img/pedigree.png"
      /></a>
    </h1>

    <p>Skuggan är vår kastrerade hane som agerar lekfarbror med kattungarna.</p>
    <p>
      Han tycker mycket om bus och lek men har även tid att mysa en stund i
      sängen under högljutt purrande. Favoritleksaker är grässtrån, "magic
      worm", lådor, prassliga saker, grässtrån, fingrar bakom hyllor (han är
      superförsiktig), flugor etc.
    </p>
    <h2>Fotoalbum</h2>
    <BootstrapGallery :images="pictures" />
  </div>
</template>
