<style>
@charset "UTF-8";
@font-face {
  font-family: "Annie Use Your Telescope";
  font-weight: normal;
  font-style: normal;
  src: url("./assets/AnnieUseYourTelescope-Regular.ttf") format("truetype");
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  color: #185a9d;
  font-family: "Annie Use Your Telescope", sans-serif;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.page-container,
.container-md {
  background-color: white;
  text-align: center;
  margin: auto;
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

.shadow {
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
}

.card {
  border: none;
  border-bottom: 1px solid #fafafa;
}

.hoverShadow:hover {
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
}

.pedigree {
  width: 60px;
  margin-left: 30px;
}
</style>

<template>
  <div class="page-container">
    <Navbar />
    <NuxtPage />
    <PageFoot />
  </div>
</template>
