<template>
  <div class="banner" id="home" data-aos="fade-down" data-aos-duration="250">
    <div class="content text-h4 text-sm-h3 text-md-h2 text-lg-h1">Innovation For<br>Better Life</div>
  </div>
</template>

<style scoped>
.banner {
  background-image: url('https://www.ifad.org/documents/38711624/39233212/innovation_banner.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 90vh;
}
.banner .content {
  background-color: rgba(0, 0, 0, .25);
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

/* Media Query */
@media (max-width: 1250px) {
  .banner { height: 75vh; }
}
@media (max-width: 960px) {
  .banner { height: 60vh; }
}
@media (max-width: 800px) {
  .banner { height: 45vh; }
}
@media (max-width: 600px) {
  .banner { height: 35vh; }
}
@media (max-width: 450px) {
  .banner { height: 30vh; }
}
</style>