<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.navbar {
  background: linear-gradient(90deg, #4298c3 0%, #43cea2 100%);
  height: 70px;
  margin: auto;
}

.navbox,
.linkbox,
.headerbox {
  display: flex;
  border-style: solid;
  border-width: 2px;
}

.navbox {
  width: 100%;

  justify-content: space-between;
  align-items: center;
}

headerbox {
}

.linkbox {
}

.link:hover {
  color: white;
}

.navbar-brand {
  font-family: "Annie Use Your Telescope";
  font-size: 40px;
  color: white;
}

.logo {
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  max-width: 100px;
  margin: 10px;
}
</style>

<template>
  <div class="navbar">
    <nav class="navbox">
      <div class="header headerbox">
        <img
          src="/img/D20Logo.png"
          alt="Logga - katt som leker med tärning"
          class="logo"
        />
        <h1>D20's Kattuppfödning</h1>
      </div>
      <ul class="linkbox">
        <li><a href="#">Om oss</a></li>
        <li><a href="#">Våra katter</a></li>
        <li><a href="#">Till salu</a></li>
        <li><a href="#">Länkar</a></li>
      </ul>
    </nav>
  </div>
</template>
