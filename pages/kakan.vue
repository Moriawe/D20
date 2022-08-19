<script>
export default {
  data() {
    return {
      pictures: [
        {
          id: 1,
          image: "/img/kakan/kakan_20200531.jpg",
          title: "Kakan - första veckan hemma hos oss (31/5 -20)",
        },
        {
          id: 2,
          image: "/img/kakan/kakan_20200602.jpg",
          title: "Är det där en humla? (2/6 -20)",
        },
        {
          id: 3,
          image: "/img/kakan/kakan_20200603.jpg",
          title: "Span från balkongen (3/6 -20)",
        },
        {
          id: 4,
          image: "/img/kakan/kakan_20200616.jpg",
          title: "Första dagen med sele (16/6 -20)",
        },
        {
          id: 5,
          image: "/img/kakan/kakan_20200620.jpg",
          title: "På utflykt i trädgården (ny sele) (20/6 -20)",
        },
        {
          id: 5,
          image: "/img/kakan/kakan_20200623.jpg",
          title: "På utflykt i trädgården (ny sele) (23/6 -20)",
        },
        {
          id: 6,
          image: "/img/kakan/kakan_20200625.jpg",
          title: "Första skogsturen (25/6 -20)",
        },
        {
          id: 7,
          image: "/img/kakan/kakan_20200713.jpg",
          title: "På kanottur (13/7 -20)",
        },
        {
          id: 8,
          image: "/img/kakan/kakan_20200714.jpg",
          title: "På kanottur (13/7 -20)",
        },
        {
          id: 9,
          image: "/img/kakan/kakan_20210512.jpg",
          title: "En dag i skogen (12/5 -21)",
        },
        {
          id: 10,
          image: "/img/kakan/kakan_20210518.jpg",
          title: "På span i köket (18/5 -21)",
        },
        {
          id: 11,
          image: "/img/kakan/kakan_20220103.jpg",
          title: "Skogen igen (3/1 -22)",
        },
        {
          id: 12,
          image: "/img/kakan/kakan_20220201.jpg",
          title: "Snö är kallt (1/2 -22)",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
<template>
  <div class="container-md">
    <h1>Kakan</h1>
    <p>
      Kakan är vår första hona. Hon är en riktigt smart katt som gillar
      utmaningar och att ta promenader i skogen.
    </p>
    <h2>Fotoalbum</h2>
    <BootstrapGallery :images="pictures" />
  </div>
</template>
