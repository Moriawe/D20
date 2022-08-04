<style>
.litter {
  text-align: center;
}

#love {
  max-width: 300px;
  border-radius: 50%;
}

#kittens {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  margin: 20px;
}
</style>

<template>
  <div class="container-md">
    <h2>Kattungar</h2>
    <div id="kittens">
      <div class="litter">
        <h3>Kakan ❤️ Nuutti</h3>
        <img id="love" src="/img/kakanonuutti.jpg" alt="Kakan o Nuutti" />
        <h3>D20's Kakkull</h3>
        <p>Födda 17/7 2022</p>

        <a
          href="https://www.pawpeds.com/db/?a=p&ids=3:1521144;2:1468858&g=4&p=eur&o=elastic"
          target="_blank"
          >Stamtavla / Pedigree</a
        >
      </div>
      <div class="card-group">
        <div class="card">
          <img
            src="/img/kakkullen/Baddaren-Dice-2-small.jpg"
            class="card-img-top"
            alt="Baddaren"
          />
          <div class="card-body">
            <h5 class="card-title">
              <a href="/kakkullen/baddaren">Baddaren</a>
            </h5>
            <p class="card-text">
              <small class="text-muted">♂ Svart (EUR n)</small>
            </p>
            <p>BOKAD för avel!</p>
          </div>
        </div>
        <div class="card">
          <img
            src="/img/kakkullen/Brago-Dice-2-small.jpg"
            class="card-img-top"
            alt="Brago"
          />
          <div class="card-body">
            <h5 class="card-title"><a href="/kakkullen/brago">Brago</a></h5>
            <p class="card-text">
              <small class="text-muted">♀ Röd (EUR d)</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="/img/kakkullen/Ballerina-Dice-1-small.jpg"
            class="card-img-top"
            alt="Ballerina"
          />
          <div class="card-body">
            <h5 class="card-title">
              <a href="/kakkullen/ballerina">Ballerina</a>
            </h5>
            <p class="card-text">
              <small class="text-muted">♀ Svartsköldpadda smoke (EUR fs)</small>
            </p>
            <p>SÖKER ev. fodervärd!</p>
          </div>
        </div>
        <div class="card">
          <img
            src="/img/kakkullen/Singoalla-Dice-1-small.jpg"
            class="card-img-top"
            alt="Singoalla"
          />
          <div class="card-body">
            <h5 class="card-title">
              <a href="/kakkullen/singoalla">Singoalla</a>
            </h5>
            <p class="card-text">
              <small class="text-muted"
                >♀️ Svartsköldpadda smoke (EUR fs)</small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
