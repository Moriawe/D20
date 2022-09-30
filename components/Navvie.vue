// Copied from https://codepen.io/sanketbodke/pen/LYyzzYb and modified.

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.html {
  font-size: 62.5%;
}

.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}

.container {
  max-width: 1200px;
  width: 90%;
  margin: auto;
}

.navbar {
  box-shadow: 0px 5px 10px 0px #aaa;
  position: fixed;
  width: 100%;
  background: #fff;
  color: #000;
  opacity: 0.85;
  z-index: 100;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
}

.menu-items {
  order: 2;
  display: flex;
}
.logo {
  order: 1;
  font-size: 2.3rem;
}

.menu-items li {
  list-style: none;
  margin-left: 1.5rem;
  font-size: 1.3rem;
}

.navbar a {
  color: #444;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.navbar a:hover {
  color: #117964;
}

@media (max-width: 768px) {
  .navbar {
    opacity: 0.95;
  }

  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
  }

  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .navbar-container .hamburger-lines {
    display: block;
    height: 28px;
    width: 35px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #333;
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 100px;
    background: #fff;
    height: 100vh;
    max-width: 300px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 40px;
    transition: transform 0.5s ease-in-out;
    box-shadow: 5px 0px 10px 0px #aaa;
    overflow: scroll;
  }

  .navbar .menu-items li {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .header {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2.5rem;
  }

  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
}

@media (max-width: 500px) {
  .navbar-container input[type="checkbox"]:checked ~ .logo {
    display: none;
  }
}

#logo {
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  max-width: 100px;
  margin: 10px;
}
</style>

<template>
  <nav class="navbar">
    <div class="navbar-container container">
      <input type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <ul class="menu-items">
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
            <li id="dropdown-header"><b>Kattungar</b></li>
            <li>
              <a class="dropdown-item" href="/kakkullen/baddaren">Baddaren</a>
            </li>
            <li>
              <a class="dropdown-item" href="/kakkullen/brago">Brago</a>
            </li>
            <li>
              <a class="dropdown-item" href="/kakkullen/ballerina">Ballerina</a>
            </li>
            <li>
              <a class="dropdown-item" href="/kakkullen/singoalla">Singoalla</a>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/links">Länkar</a>
        </li>
      </ul>
      <img
        src="/img/D20Logo.png"
        alt="Logga - katt som leker med tärning"
        id="logo"
      />
      <a href="/"><h1 class="header">D20's Cattery</h1></a>
    </div>
  </nav>
</template>
