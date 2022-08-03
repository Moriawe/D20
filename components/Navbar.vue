<style>
h1 {
  font-family: "Annie Use Your Telescope", cursive;
  font-size: 80px;
  text-align: center;
  margin-top: 40px;
}

.logo {
  max-width: 100px;
}

button {
  border: none;
}
</style>

<template>
  <h1>D20's Kattuppfödning</h1>

  <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
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
            <a class="nav-link active" aria-current="page" href="/">Hem</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">Om oss</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cats">Våra katter</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/kittens">Kattungar</a>
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
