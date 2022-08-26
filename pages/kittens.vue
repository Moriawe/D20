<style lang="scss" scoped>
h3 {
  margin-top: 0rem;
}
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
    <h1>Kattungar</h1>
    <div id="kittens">
      <div class="litter">
        <h2>Kakan ❤️ Nuutti</h2>
        <img id="love" src="/img/kakanonuutti.jpg" alt="Kakan o Nuutti" />
        <h2>D20's Kakkull</h2>
        <p>Födda 17/7 2022</p>

        <a
          href="https://www.pawpeds.com/db/?a=p&ids=3:1521144;2:1468858&g=4&p=eur&o=elastic"
          target="_blank"
          >Stamtavla / Pedigree</a
        >
      </div>
      <div class="card-group">
        <div class="card hoverShadow">
          <img
            src="/img/kakkullen/baddaren3-4weeks.jpg"
            class="card-img-top"
            alt="Baddaren"
          />
          <div class="card-body">
            <h3 class="card-title">Baddaren</h3>
            <p class="card-text">
              <small class="text-muted">♂ Svart (EUR n)</small>
            </p>
            <p>BOKAD för avel!</p>
          </div>
          <a href="/kakkullen/baddaren" class="stretched-link"></a>
        </div>

        <div class="card hoverShadow">
          <img
            src="/img/kakkullen/brago2-4weeks.jpg"
            class="card-img-top"
            alt="Brago"
          />
          <div class="card-body">
            <h3 class="card-title">Brago</h3>
            <p class="card-text">
              <small class="text-muted">♀ Röd (EUR d) Eventuellt smoke </small>
            </p>
          </div>
          <a href="/kakkullen/brago" class="stretched-link"></a>
        </div>

        <div class="card hoverShadow">
          <img
            src="/img/kakkullen/ballerina3-4weeks.jpg"
            class="card-img-top"
            alt="Ballerina"
          />
          <div class="card-body">
            <h3 class="card-title">Ballerina</h3>
            <p class="card-text">
              <small class="text-muted">♀ Svartsköldpadda smoke (EUR fs)</small>
            </p>
            <p>SÖKER ev. fodervärd!</p>
          </div>
          <a href="/kakkullen/ballerina" class="stretched-link"></a>
        </div>

        <div class="card hoverShadow">
          <img
            src="/img/kakkullen/singoalla4-4weeks.jpg"
            class="card-img-top"
            alt="Singoalla"
          />
          <div class="card-body">
            <h3 class="card-title">Singoalla</h3>
            <p class="card-text">
              <small class="text-muted"
                >♀️ Svartsköldpadda smoke (EUR fs)</small
              >
            </p>
          </div>
          <a href="/kakkullen/singoalla" class="stretched-link"></a>
        </div>
      </div>
    </div>
  </div>
</template>
