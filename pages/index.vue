<style>
.container-md {
  text-align: center;
  margin: auto;
  margin-top: 40px;
}

.news {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article {
  max-width: 800px;
  text-align: center;
  border-color: #4ba2ca;
  border-style: solid;
  padding: 20px;
  margin: 20px;
}
</style>

<template>
  <div class="container-md">
    <h2>Välkomna!</h2>
    <p>Vi är en liten uppfödning med Européer.</p>
  </div>
  <div class="news">
    <h2>Nyheter</h2>

    <div class="article">
      <h4>Kakkullen är född!</h4>
      <p>2022-07-17</p>
      <p>
        Tidigt på morgonen föddes fyra små kattungar. En kille och tre tjejer!
        <a href="/kittens">Du kan se dom här.</a>
      </p>
    </div>
    <div class="article">
      <h4>Från och med Jan -23 skall alla katter registreras och id-märkas</h4>
      <p>2022-06-15</p>
      <p>
        <a
          href="https://jordbruksverket.se/djur/hundar-katter-och-smadjur/katter/marka-och-registrera-katter?fbclid=IwAR1-kfnp_SDxsbVC1a7Qfo033fMXBZCkuWIbrx6ZjYrhYDpmjb-SFxHaHr0"
          >Jordbruksverket</a
        >
      </p>
    </div>
    <div class="article">
      <h4>Kattungar får inte flytta innan de nått 14 veckor</h4>
      <p>2022-05-29</p>
      <p>
        På FIFEs generalförsamling har det tagits beslut att from 1 januari 2023
        får inga kattungar från FIFE/SVERAK-uppfödare flytta före 14 veckors
        ålder.
      </p>
    </div>
    <div class="article">
      <h4>Resa till Åbo</h4>
      <p>2022-05-11</p>
      <p>
        Vi åker till Åbo med Kakan för att träffa Kyöpelivuoren Nellin Narkissi
        (Nuutti). Förhoppningsvis blir det bebisar någon gång i juli.
      </p>
    </div>
    <div class="article">
      <h4>Europén utsedd till Sveriges Nationalras!</h4>
      <p>2022-04-05</p>
      <p>
        <a
          href="https://www.sverak.se/2022/04/05/rasen-europe-eur-utnamnd-till-svensk-nationalras/"
          >SVERAK</a
        >
      </p>
    </div>
  </div>
</template>
