<style lang="scss" scoped>
a {
  color: white;
}

h3 {
  margin-top: 0;
}
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  color: white;
  margin: 20px;
  max-width: 840px;
}

.col-md-4 {
  align-self: center;
}

.green {
  background-color: #3ab6a1;
}

.teal {
  background-color: #309aa0;
}

.blue {
  background-color: #29869f;
}

#welcome {
  font-size: large;
}

img {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  width: 100%;
  padding: 10px;
}
</style>

<template>
  ¨
  <div class="container-md">
    <h1 class="display-1">Välkomna!</h1>
    <p id="welcome">
      Vi är en liten uppfödning med Européer baserade på B(v)ästkusten.
    </p>
  </div>

  <div class="news">
    <div class="card mb-3 blue">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="/img/news/agilitywinners.png"
            class="img-fluid rounded-start"
            alt="Vinnare av Agilitytävlingen"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">Vi vann!</h3>
            <p class="card-text">
              <small>2022-08-19</small>
            </p>
            <p class="card-text">
              Brago vann agility tävlingen både på lördagen och söndagen. Hon
              krossade allt motstånd med sina 2,38 sekunder.
            </p>
            >
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>

    <div class="card mb-3 green">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">Vi är på utställning i Örebro</h3>
            <p class="card-text">
              <small>2023-02-25/26</small>
            </p>
            <p class="card-text">
              Vi åker till Conventum i Örebro och går på utställning med Kakan
              och Brago
            </p>
            <p>
              <a href="https://www.nerk.se/">NERK som anordnar utställningen</a>
            </p>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>

    <div class="card mb-3 teal">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="/img/kakkullen/20220717_072829.jpg"
            class="img-fluid rounded-start"
            alt="nyfödda kattungar"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">Inga katter kvar till salu</h3>
            <p class="card-text">
              <small>2022-12-20</small>
            </p>
            <p class="card-text">
              Alla kattungarna ur kakkullen har nu flyttat till sina nya hem.
              Baddaren flyttade hela vägen till Norge men Ballerina och
              Singoalla bor i närheten.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- NYA SLUT -->

    <div class="card mb-3 blue">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">Fotoalbum</h3>
            <p class="card-text">
              <small>2022-08-19</small>
            </p>
            <p class="card-text">Alla katterna har fått ett eget fotoalbum.</p>
            <p>
              Kika gärna under <a href="/cats">våra katter</a> och
              <a href="/kittens">kattungar</a>
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="/img/kakan/kakan_20200531.jpg"
            class="img-fluid rounded-start"
            alt="Kakan i katträdet på balkongen"
          />
        </div>
      </div>
    </div>

    <div class="card mb-3 green">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="/img/kakkullen/20220717_072829.jpg"
            class="img-fluid rounded-start"
            alt="nyfödda kattungar"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">Kakkullen är född</h3>
            <p class="card-text">
              <small>2022-07-17</small>
            </p>
            <p class="card-text">
              Tidigt på morgonen föddes fyra små kattungar. En kille och tre
              tjejer!
            </p>
            <a href="/kittens">Mer info</a>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 teal">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">Ny lag om id-märkning</h3>
            <p class="card-text">
              <small>2022-06-15</small>
            </p>
            <p class="card-text">
              Från och med januari 2023 skall alla katter registreras och
              id-märkas.
              <a
                href="https://jordbruksverket.se/djur/hundar-katter-och-smadjur/katter/marka-och-registrera-katter?fbclid=IwAR1-kfnp_SDxsbVC1a7Qfo033fMXBZCkuWIbrx6ZjYrhYDpmjb-SFxHaHr0"
                >Jordbruksverket</a
              >
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="/img/news/catId.jpg"
            class="img-fluid rounded-start"
            alt="Katt ID-kort från Animal Tracker"
          />
        </div>
      </div>
    </div>

    <div class="card mb-3 blue">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="/img/news/kittens14.jpg"
            class="img-fluid rounded-start"
            alt="Små kattungar i gräset"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">
              Kattungar får inte flytta innan 14 veckor
            </h3>
            <p class="card-text">
              <small>2022-05-29</small>
            </p>
            <p class="card-text">
              På FIFEs generalförsamling har det tagits beslut att from 1
              januari 2023 får inga kattungar från FIFE/SVERAK-uppfödare flytta
              före 14 veckors ålder.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 green">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">Resa till Åbo</h3>
            <p class="card-text">
              <small>2022-05-11</small>
            </p>
            <p class="card-text">
              Vi åker till Åbo med Kakan för att träffa Kyöpelivuoren Nellin
              Narkissi (Nuutti). Förhoppningsvis blir det bebisar någon gång i
              juli.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="/img/news/turku.jpg"
            class="img-fluid rounded-start"
            alt="Katten Kakan i ett runt båtfönster påväg till Åbo"
          />
        </div>
      </div>
    </div>

    <div class="card mb-3 teal">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="/img/news/swedishFlag.jpg"
            class="img-fluid rounded-start"
            alt="svenska flaggan"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">
              Europén utsedd till Sveriges Nationalras!
            </h3>
            <p class="card-text">
              <small>2022-04-05</small>
            </p>
            <p class="card-text">
              <a
                href="https://www.sverak.se/2022/04/05/rasen-europe-eur-utnamnd-till-svensk-nationalras/"
                >SVERAK</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
