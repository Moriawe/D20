<style lang="scss" scoped>
.col-md-4 {
  align-self: center;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0, 0, 0, 0);
}
</style>

<template>
  <div class="container-md">
    <h1>Våra katter</h1>

    <div class="card mb-3 mx-auto" style="max-width: 700px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="/img/kakan.jpg"
            class="img-fluid rounded-start"
            alt="En bild på vår katt Kakan"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">Silverblomman's Tuttifrutti</h2>
            <h3>"Kakan"</h3>
            <p class="card-text">
              <small class="text-muted">♀ Född: 2019-11-18</small>
            </p>
            <p class="card-text">
              <a
                href="https://www.pawpeds.com/db/?a=p&id=1521144&g=4&p=eur&o=elastic"
                target="_blank"
                >Stamtavla / Pedigree</a
              >
            </p>
          </div>
        </div>
        <a href="/kakan" class="stretched-link"></a>
      </div>
    </div>

    <div class="card mb-3 mx-auto" style="max-width: 700px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="/img/skuggan.jpg"
            class="img-fluid rounded-start"
            alt="En bild på vår katt Skuggan"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">Ooo X-Files Smoking Hot Shadow Man</h2>
            <h3>"Skuggan"</h3>
            <p class="card-text">
              <small class="text-muted">♂ Född: 2020-06-13</small>
            </p>
            <p class="card-text">
              <a
                href="https://www.pawpeds.com/db/?a=p&id=1521109&g=4&p=eur&o=elastic"
                target="_blank"
                >Stamtavla / Pedigree</a
              >
            </p>
          </div>
        </div>
        <a href="/skuggan" class="stretched-link"></a>
      </div>
    </div>
  </div>
</template>
