<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss">
.navbar {
  background: linear-gradient(90deg, #4298c3 0%, #43cea2 100%);
}

.navbar .navbar-nav .nav-link:hover {
  color: white;
}

.navbar-brand {
  font-family: "Annie Use Your Telescope";
  color: white;
}

.logo {
  max-width: 100px;
  margin: 20px;
}
</style>

<template>
  <nav class="navbar navbar-expand-lg fs-5">
    <div class="container-fluid">
      <img class="logo" src="/img/D20Logo.png" alt="home" />
      <a class="navbar-brand fs-1" href="/">D20's kattuppfödning</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Hem</a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/about"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Om oss
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/about">Om oss</a></li>
              <li><a class="dropdown-item" href="/contact">Kontakt</a></li>
              <li>
                <a class="dropdown-item" href="/buyCat">Köpa katt av oss</a>
              </li>
              <li><a class="dropdown-item" href="/faq">FAQ</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="/europe">Europé</a></li>
              <li><a class="dropdown-item" href="/colors">Färger</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/cats"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Våra katter
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/cats">Våra katter</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="/kakan">Kakan</a></li>
              <li><a class="dropdown-item" href="/skuggan">Skuggan</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/kittens"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Till salu
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/kittens">Kullar</a></li>

              <li><hr class="dropdown-divider" /></li>
              <li><b>Kattungar</b></li>
              <li>
                <a class="dropdown-item" href="/kakkullen/baddaren">Baddaren</a>
              </li>
              <li>
                <a class="dropdown-item" href="/kakkullen/brago">Brago</a>
              </li>
              <li>
                <a class="dropdown-item" href="/kakkullen/ballerina"
                  >Ballerina</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="/kakkullen/singoalla"
                  >Singoalla</a
                >
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/links">Länkar</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!--  IF this comment is removed Nuxt will make two NuxtPages here for whatever reason  -->
</template>
