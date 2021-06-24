<template>
  <div class="Home">
    <div class="banner">
      <div class="content text-h4 text-sm-h3 text-md-h2 text-lg-h1">Innovation For<br>Better Life</div>
    </div>
    <v-container>
      <v-row>
        <v-col cols="6" sm="6" md="4" v-for="(b, i) in business" :key="i">
          <div class="business grey lighten-4">
            <img :src="b.img" height="140" :alt="b.title">
            <div class="bus-title text-uppercase mt-2 primary--text">{{ b.title }}</div>
            <div class="bus-desc text-capitalize secondary--text">{{ b.desc }}</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | Spell Innovation',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  data: () => ({
    business: [
      { img: require('../assets/img/img1.png'), title: 'spell soft', desc: 'software development company' },
      { img: require('../assets/img/img2.png'), title: 'spell digital media', desc: 'digital marketing company' },
      { img: require('../assets/img/img3.png'), title: 'spell trading', desc: 'computer & peripheral supplies' },
      { img: require('../assets/img/img4.png'), title: 'spell hosting', desc: 'software development company' },
      { img: require('../assets/img/img5.png'), title: 'spell SMS', desc: 'software development company' },
      { img: require('../assets/img/img6.png'), title: 'eduspell', desc: 'nepal\'s e-learning platform' },
    ]
  })
}
</script>

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
/* Bussiness */
.business {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 30vh;
  transition: ease-in-out 250ms;
  border-radius: 10px;
  box-shadow: 5px 10px 15px 0 rgba(0, 0, 0, .25);
  /* background: linear-gradient(to bottom, orange 0%, purple 100%); */
}
/* .business:hover {
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .25);
  border: 2px solid orange;
} */


/* Media Query */
@media (max-width: 1250px) {
  .banner { height: 75vh; }
  .business img { height: 130px; }
}
@media (max-width: 960px) {
  .banner { height: 60vh; }
  .business img { height: 120px; }
}
@media (max-width: 800px) {
  .banner { height: 45vh; }
  .business img { height: 110px; }
}
@media (max-width: 600px) {
  .banner { height: 35vh; }
  .business { min-height: 25vh; }
  .business img { height: 100px; }
}
@media (max-width: 450px) {
  .banner { height: 30vh; }
  .business img { height: 90px; }
}
</style>