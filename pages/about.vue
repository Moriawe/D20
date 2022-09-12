<style lang="scss" scoped>
#about {
  display: flex;
  flex-wrap: wrap;
}

#us {
  flex-grow: 2;
  margin: 20px;
  padding: 20px;
  max-width: 600px;
  text-align: center;
}

#members {
  flex-grow: 1;
  margin: 20px;
  padding: 20px;
  max-width: 400px;
}
</style>

<template>
  <div class="container-md" id="about">
    <div id="us">
      <h1>Om oss</h1>
      <p>
        Vi är mor och dotter som föder upp kattrasen Europé. Namnet D20 kommer
        ifrån tärningen med 20 sidor som används när man rollspelar.
      </p>
      <p>
        Våra katter är innekatter men tycker om att följa med ut på promenader i
        sele. Mest i närområdet men vi har även åkt på kanottur och gått i olika
        strövarområden. De har även tillgång till en stor balkong som de kan
        spana ifrån på dagarna. Det bor många katter på gatan och det blir ofta
        bråk och veterinärbesök, därför har vi valt att hålla dom inne.
      </p>
      <p>
        Jag heter Jennie och är fd. lärare som nu pysslar med apputveckling. Jag
        är uppvuxen med en stor orange huskatt som hette Tjalle och när jag fick
        eget hus skaffade jag, tillsammans med min man, en huskatt via en
        kattförening som vi döpte till Katten Solo. Han gick tyvärr bort i
        februari 2022, 15 år gammal.
      </p>
      <p>
        Min dotter är konstnären som står för alla tecknade bilder på hemsidan.
      </p>
      <p>
        <i class="bi bi-instagram"></i>
        <a href="https://www.instagram.com/katten_kakan/" target="_blank"
          ><img
            src="/img/1200px-Instagram.svg.png"
            alt="instagram logo"
            style="width: 30px"
        /></a>
        Katternas instagram
      </p>
    </div>
    <div id="members">
      <h2>Medlemmar i:</h2>
      <p>
        <a href="https://www.sverak.se/" target="_blank"
          ><img src="/img/sverakLogo.png" alt="SVERAK"
        /></a>
      </p>
      <p>
        <a href="http://europeringen.se/" target="_blank"
          ><img src="/img/europeringenLogo.gif" alt="Européringen"
        /></a>
      </p>
      <p>Svensk Nationalkatt</p>
      <p>
        <a href="https://elfsborgskatten.se/" target="_blank"
          ><img src="/img/elfborgskattenLogo.jpg" alt="Elfborgskatten"
        /></a>
      </p>
    </div>
  </div>
</template>
