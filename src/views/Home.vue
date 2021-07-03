<template>
  <div class="home">
    <!-- <div class="banner" data-aos="zoom-in" data-aos-duration="250">
      <div class="content text-h4 text-sm-h3 text-md-h2 text-lg-h1">Innovation For<br>Better Life</div>
    </div> -->
    <div class="text__banner" data-aos="zoom-in" data-aos-duration="250">
      <div class="text__banner__content text-h3 text-md-h2 text-lg-h1">
        <div style="line-height: 1;">Spell Innovation</div>
        <span class="mt-3 mt-md-5 text-h5 text-md-h4">Innovation For Better Life</span>
      </div>
    </div>


    <div class="container">
      <div class="home__about" data-aos="zoom-in">
        <div><img src="https://miro.medium.com/max/750/1*zJkojKNpFD9HFGPJLCs15Q.jpeg" alt="Spell Innovation"></div>
        <div class="pa-4 pa-sm-6 pa-md-8 pa-lg-10">
          <div class="text-h5 text-md-h4 mb-2" data-aos="fade-left">About Us</div>
          <p class="text-justify" data-aos="fade-right">{{ intro1 }}</p>
          <v-btn to="/about" data-aos="zoom-in" rounded width="150" dark large style="background: linear-gradient(90deg, rgba(243,108,39,1) 0%, rgba(156,39,176,1) 100%);">
            <span class="text-capitalize">more</span>
            <v-icon size="20" right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <!-- Spell Business -->
    <div class="spell_business">
      <div class="text-center text-h4 text-sm-h4 text-md-h3 mb-3 mb-sm-4 mb-md-5 mb-lg-6" data-aos="fade-up">Spell Bussiness</div>
      <div class="container spell_business__container">
        <div class="spell_business__item text-capitalize white px-3 py-6 py-sm-8 py-md-10 py-lg-12" v-for="(item, i) in business" :key="i" data-aos="zoom-in">
          <img :src="item.img" :alt="item.title" height="80">
          <div class="mb-2 mt-5" style="opacity: .75; line-height: 1.2; font-weight: bold; display: block; font-size: 20px;">{{ item.title }}</div>
          <div style="font-size: 14px; opacity: .75;">{{ item.desc }}</div>
        </div>
      </div>
    </div>

    <!-- Spell Foundation -->
    <div class="spell__foundation">
      <div class="text-center text-h4 text-sm-h4 text-md-h3 mb-3 mb-sm-4 mb-md-5 mb-lg-6" data-aos="fade-up">Spell Foundation</div>
      <div class="container spell__foundation__container" data-aos="fade-left">
        <div class="spell__foundation__content">
          <div class="text-h5 text-md-h4 mb-2" data-aos="fade-left">About Foundation</div>
          <p data-aos="fade-right">As CSR activities go, Spell Innovation has an independent organization, SPELL FOUNDATION formed by the stakeholders of this company, to carry out activities in social development. The foundation especially focuses on, education of students of under privileged and low income families of all over the Nepal. The Foundation also provides technical knowledge to students about various information technology fields.</p>
          <div class="text-h5 text-md-h4 mb-2 mt-6" data-aos="fade-left">Activities</div>
          <p data-aos="fade-right">Spell Foundation organizes a CSR programme “ Be a Master Web Blogger”. This includes the free web development training and the best developer cash award.</p>
        </div>
        <div class="spell__foundation__img">
          <img src="../assets/foundation.webp" alt="Spell Foundation" data-aos="fade-right">
        </div>
      </div>
    </div>

    <!-- Our Projects & Clients -->
    <div class="secondary white--text" style="margin-bottom: 50px; padding-top: 50px; padding-bottom: 50px;" data-aos="fade-up">
      <div class="container client">
        <div class="client__item text-center px-3 py-6 py-sm-8 py-md-10 py-lg-12" v-for="(item ,i) in clients" :key="i" data-aos="zoom-in">
          <div style="font-size: 50px; line-height: 1;">{{ item.count }}</div>
          <div style="opacity: .8; font-size: 18px;">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    intro1: 'We are living in the era of Information Technology. There is no need to describe the importance and significance of the wide - spread use of information technology. SPELL INNOVATION PRIVATE LIMITED is a young company in Kathmandu, Nepal. We SPELL INNOVATION say we’re young because we’re peopled by young, energetic, curious and committed minds who are excited to solve one stop automated solution for your trade, industry, institution, organization and invention...',
    business: [
      { img: require('../assets/img/img1.png'), title: 'spell soft', desc: 'software development company' },
      { img: require('../assets/img/img2.png'), title: 'spell digital media', desc: 'digital marketing company' },
      { img: require('../assets/img/img3.png'), title: 'spell trading', desc: 'computer & peripheral supplies' },
      { img: require('../assets/img/img4.png'), title: 'spell hosting', desc: 'software development company' },
      { img: require('../assets/img/img5.png'), title: 'spell SMS', desc: 'software development company' },
      { img: require('../assets/img/img6.png'), title: 'eduspell', desc: 'nepal\'s e-learning platform' },
    ],
    clients: [
      { count: 5454, title: 'Completed Projects' },
      { count: 456, title: 'Active Clients' },
      { count: 252, title: 'OnGoing Projects' },
      { count: 5456, title: 'Happy Clients' }
    ],
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

/* Home About */
.home__about {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  box-shadow: 0 1px 15px 0 rgb(0 0 0 / 20%);
  margin-top: 50px;
  margin-bottom: 50px;
}
.home__about img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: contain;
}

/* Spell Foundation */
.spell__foundation {
  /* background-color: rgba(165, 39, 176, .075); */
  padding-top: 50px;
  padding-bottom: 50px;
}
.spell__foundation__container {
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 20px;
}
.spell__foundation__img img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.spell__foundation__container p { text-align: justify; }

/* Media Query */
@media (max-width: 1250px) {
  .home__about { margin-top: 40px; margin-bottom: 40px; }
  .banner { height: 75vh; }
}
@media (max-width: 960px) {
  .home__about { grid-template-columns: 100%; }
  .home__about { margin-top: 30px; margin-bottom: 30px; }
  .banner { height: 60vh; }
}
@media (max-width: 800px) {
  .banner { height: 45vh; }
  .home__about { margin-top: 20px; margin-bottom: 20px; }
  .spell__foundation__container { grid-template-columns: 100%; }
}
@media (max-width: 600px) {
  .banner { height: 35vh; }
}
@media (max-width: 450px) {
  .banner { height: 30vh; }
}
</style>