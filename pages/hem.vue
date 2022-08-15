<style scoped>
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  color: white;
  margin: 20px;
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

img {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  margin: 15px;
}
</style>

<template>
  <div class="container-md">
    <h1 class="display-1">Välkomna!</h1>
    <p>Vi är en liten uppfödning med Européer.</p>
  </div>
  <div class="news">
    <h2>Nyheter</h2>

    <div class="card mb-3 green" style="max-width: 840px">
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
            <h2 class="card-title">Kakkullen är född</h2>
            <p class="card-text">
              <small class="text-muted">2022-07-17</small>
            </p>
            <p class="card-text">
              Tidigt på morgonen föddes fyra små kattungar. En kille och tre
              tjejer!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 teal" style="max-width: 840px">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">Ny lag om id-märkning</h2>
            <p class="card-text">
              <small class="text-muted">2022-06-15</small>
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
            alt="nyfödda kattungar"
          />
        </div>
      </div>
    </div>

    <div class="card mb-3 blue" style="max-width: 840px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="/img/news/kittens14.jpg"
            class="img-fluid rounded-start"
            alt="nyfödda kattungar"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">
              Kattungar får inte flytta innan 14 veckor
            </h2>
            <p class="card-text">
              <small class="text-muted">2022-05-29</small>
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

    <div class="card mb-3 green" style="max-width: 840px">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">Resa till Åbo</h2>
            <p class="card-text">
              <small class="text-muted">2022-05-11</small>
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
            alt="nyfödda kattungar"
          />
        </div>
      </div>
    </div>

    <div class="card mb-3 teal" style="max-width: 840px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="/img/news/swedishFlag.jpg"
            class="img-fluid rounded-start"
            alt="nyfödda kattungar"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">
              Europén utsedd till Sveriges Nationalras!
            </h2>
            <p class="card-text">
              <small class="text-muted">2022-04-05</small>
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
