<template>
  <v-app>
    <Navbar />
    <Drawer />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Drawer from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { Navbar, Drawer, Footer },
  data: () => ({
    //
  }),
};
</script>

<style>
* { text-decoration: none; }
html { scroll-behavior: smooth; }
.container { 
  max-width: 1250px !important; 
  margin-right: auto;
  margin-left: auto;
  padding: 12px;
}

/* Test banner */
.text__banner {
  background: linear-gradient(90deg, rgba(243,108,39,1) 0%, rgba(156,39,176,1) 100%); 
  height: 60vh;
  margin-bottom: 30px;
}
.text__banner__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  text-align: center;
  overflow: hidden;
}
.text__banner__content span {
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1 !important;
}
@media (max-width: 1060px) {
  .text__banner { height: 50vh; }
}
@media (max-width: 840px) {
  .text__banner { height: 40vh; }
}

/* Spell Business */
.spell_business {
  width: 100%;
  background-color: rgba(227, 118, 58, .075);
  padding-top: 60px;
  padding-bottom: 60px;
}
.spell_business__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31%, 1fr));
  grid-gap: 30px;
}
.spell_business__item {
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 5%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
@media (max-width: 1250px) {
  .spell_business__container { grid-gap: 25px; }
}
@media (max-width: 960px) {
  .spell_business__container { grid-gap: 20px; }
  .spell_business__container { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
}
@media (max-width: 800px) {
  .spell_business__container { grid-gap: 16px; }
  .spell__foundation__container { grid-template-columns: 100%; }
  .spell__foundation__container p { line-height: 1.4; }
}
@media (max-width: 600px) {
  .spell_business__container { grid-gap: 12px; }
}
@media (max-width: 450px) {
  .spell_business__container { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}


/* Client */
.client {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 20px;
}
.client__item {
  border: 1px solid rgb(255 255 255 / 75%);
  overflow: hidden;
}
@media (max-width: 960px) {
  .client { grid-gap: 16px; grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); } 
}
</style>