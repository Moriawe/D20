<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
h1 {
  font-family: "Annie Use Your Telescope", cursive;
  font-size: 4em;
  text-align: center;
  margin-top: 40px;
}

.logo {
  max-width: 100px;
}
</style>

<template>
  <h1>D20's Kattuppfödning</h1>
  <div class="container-md">
    <nav
      class="navbar navbar-expand-lg sticky-top navbar-dark"
      style="background-color: #4ba2ca"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/"
          ><img class="logo" src="/img/D20Logo.png" alt="home"
        /></a>
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
        <div class="collapse navbar-collapse" id="navbarNav">
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
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="/europe">Europé</a></li>
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
                Kattungar
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/kittens">Kullar</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="/kakkullen/baddaren"
                    >Baddaren</a
                  >
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
  </div>

  <!--  IF this comment is removed Nuxt will make two NuxtPages here for whatever reason  -->
</template>
