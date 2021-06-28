<template>
  <v-app>
    <Navbar />
    <v-main>
      <Home />
      <div style="height: 60px;" />
      <Business />
      <div style="height: 60px;" />
      <About />
      <div style="height: 60px;" />
      <Services />
      <div style="height: 60px;" />
      <Contact />
      <div style="height: 60px;" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Footer from './components/Footer.vue'

// pages
import Home from './views/Home.vue'
import Business from './views/Business.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import Contact from './views/Contact.vue'
export default {
  name: 'App',
  components: { 
    Navbar, Footer,
    Home, Business, About, Services, Contact
  },
  data: () => ({
    //
  }),
};
</script>

<style>
html { scroll-behavior: smooth; }
</style>
