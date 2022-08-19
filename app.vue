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
  font-family: "Annie Use Your Telescope", sans-serif;
}

h1,
.h1 {
  color: #185a9d;
}

.container-md {
  background-color: white;
  text-align: center;
  margin: auto;
  margin-top: 40px;
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
</style>

<template>
  <div class="container-md">
    <Navbar />
    <NuxtPage />
    <PageFoot />
  </div>
</template>
