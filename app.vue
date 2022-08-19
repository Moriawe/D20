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
</style>

<template>
  <div class="container-md">
    <Navbar />
    <NuxtPage />
    <PageFoot />
  </div>
</template>
