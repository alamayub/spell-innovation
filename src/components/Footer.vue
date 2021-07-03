<template>
  <v-footer padless style="background: linear-gradient(90deg, rgba(243,108,39,1) 0%, rgba(156,39,176,1) 100%);" class="py-4 py-sm-8 py-md-12 py-lg-16" dark>
    <div class="container">
      <div class="footer mb-6">
        <div class="text-center">
          <div class="footer__logo">
            <img src="../assets/logo_text.png" alt="Spell Innovation Logo & Text" >
          </div>
          <div class="mt-3 d-flex flex-wrap justify-center" style="grid-gap: 8px;">
            <v-btn icon v-for="(social, i) in socials" :key="i" class="white primary--text" target="_blank" :href="social.to">
              <v-icon size="18">{{ social.icon }}</v-icon>
            </v-btn>  
          </div>
        </div>
        <div>
          <div class="footer__content__title">
            <span>Company</span>
          </div>  
          <div class="d-flex flex-column">
            <span v-for="(c, i) in company" :key="i">{{ c.title }}</span>  
          </div>
        </div>
        <div>
          <div class="footer__content__title">
            <span>Business</span>
          </div>  
          <div class="d-flex flex-column">
            <span v-for="(c, i) in business" :key="i">{{ c.title }}</span>  
          </div>
        </div>
        <div>
          <div class="footer__content__title">
            <span>Foundation</span>
          </div>  
          <div class="d-flex flex-column">
            <span v-for="(c, i) in spell" :key="i">{{ c.title }}</span>  
          </div>
        </div>
        <div>
          <div class="footer__content__title">
            <p style="lin-height: 1;"><strong>SPELL INNOVATION</strong>&nbsp;Pvt. Ltd.</p>
          </div>  
          <div style="display: grid; grid-gap: 4px;">
            <div v-for="(c, i) in contacts" :key="i" class="d-flex" style="grid-gap: 8px;">
              <div><v-icon size="20">{{ c.icon }}</v-icon></div>
              <div>{{ c.title }}</div>
            </div>
          </div>
        </div>
      </div>  
      <div class="pt-4 text-center d-flex flex-column flex-md-row align-center justify-space-between" style="border-top: 1px solid #fff;">
        <div> Copyright @{{ new Date().getFullYear() }} <strong>SPELL INNOVATION.</strong> All Right Reserved</div>  
        <div class="mt-3 mt-md-0">
          <v-btn outlined tile class="mr-2 text-capitalize">Terms & Conditions</v-btn>  
          <v-btn outlined tile class="text-capitalize">Privacy Policy</v-btn>
        </div>
      </div>  
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    socials: [
      { icon: 'mdi-facebook', to: 'https://www.facebook.com' },
      { icon: 'mdi-twitter', to: 'https://www.facebook.com' },
      { icon: 'mdi-linkedin', to: 'https://www.facebook.com' },
      { icon: 'mdi-instagram', to: 'https://www.facebook.com' }
    ],
    company: [
      { title: 'About Us', to: '/' },
      { title: 'Careers', to: '/' },
      { title: 'News', to: '/' },
      { title: 'Blog', to: '/' },
      { title: 'Contact us', to: '/' },
    ],
    business: [
      { title: 'Spell Hosting', to: '/' },
      { title: 'Spell SMS', to: '/' },
      { title: 'Eduspell', to: '/' },
      { title: 'Spell Trading', to: '/' },
      { title: 'Spell Soft', to: '/' },
      { title: 'Spell Digital Media', to: '/' },
    ],
    spell: [
      { title: 'About', to: '/' },
      { title: 'Activities', to: '/' },
    ], 
    contacts: [
      { icon: 'mdi-map-marker', title: 'Baneshwor-10, Kathmandu' },
      { icon: 'mdi-email', title: 'contact@spellinnovation.com' },
      { icon: 'mdi-phone-classic', title: '01450000' },
      { icon: 'mdi-cellphone', title: '+9779823009044' },
      { icon: 'mdi-cellphone', title: '+9779823009045' }
    ],
  })  
}
</script>

<style scoped>
.footer__logo img {
  display: block;
  object-fit: cover;
  height: 100%;
  width: 100%;  
}
.footer {
  display: grid;
  grid-gap: 12px;
  /* grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));   */
  grid-template-columns: 22% 13% 18% 14%  29%;  
}

.footer__content__title {
  font-weight: bold;
  font-size: 25px;
  line-height: 1;  
  margin-bottom: 15px;
}
.footer__content__title span {
  border-bottom: 1px solid rgb(255 255 255 / 50%);  
}

@media (max-width: 1100px) {
  .footer { grid-gap: 12px; grid-template-columns: repeat(auto-fit, minmax(32%, 1fr)); }  
}
@media (max-width: 760px) {
  .footer { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }  
}
@media (max-width: 500px) {
  .footer { grid-gap: 20px; grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }  
  .footer__content__title { margin-bottom: 5px; }
}
</style>