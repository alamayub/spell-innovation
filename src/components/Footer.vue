<template>
  <v-footer padless dark color="secondary">
    <v-container class="footer">  
      <v-row class="pb-5">
        <v-col cols="6" sm="6" md="3" class="services">
          <div class="other-title">
            <span style="border-bottom: 1px solid white;">Company</span>
          </div>
          <div class="links">
            <span v-for="(c, i) in company" :key="i" @click.stop="goto(c.to)">{{ c.title  }}</span>
          </div>
        </v-col>
        <v-col cols="6" sm="6" md="3" class="services">
          <div class="other-title">
            <span style="border-bottom: 1px solid white;">Business</span>
          </div>
          <div class="links">
            <span v-for="(b, i) in business" :key="i" @click.stop="goto(b.to)">{{ b.title  }}</span>
          </div>
        </v-col>
        <v-col cols="4" sm="6" md="3" class="services">
          <div class="other-title">
            <span style="border-bottom: 1px solid white;">Spell</span>
          </div>
          <div class="links">
            <span v-for="(s, i) in spell" :key="i" @click.stop="goto(s.to)">{{ s.title  }}</span>
          </div>
        </v-col>
        <v-col cols="8" sm="6" md="3">
          <div class="title">SPELL INNOVATION Pvt. Ltd.</div>
          <div v-for="(c, i) in contacts" :key="i">
            <v-icon size="20">{{ c.icon }}</v-icon>
            <span class="ml-2">{{ c.title }}</span>
          </div>
        </v-col>
      </v-row> 
      <div style="height: 1px; background-color: white;" class="mb-5"></div>
      <div class="d-md-flex justify-space-between align-center">
        <div class="text-center">Copyright @{{ new Date().getFullYear() }} <b>SPELL INNOVATION.</b> All Right Reserved</div>
        <div class="mt-3 mt-sm-3 mt-md-0 d-flex flex-column flex-sm-row justify-space-between sc" style="grid-gap: 16px; width: 50%;">
          <div class="terms justify-center">
            <span class="px-3" @click.stop="goto('/')">Terms & Conditions</span>
            <span class="px-3" @click.stop="goto('/')">Privacy Policy</span>
          </div>
          <div class="d-flex justify-center" style="grid-gap: 10px;">
            <div v-for="(social, s) in socials" :key="s" class="ft-social">
              <a :href="social.href" target="_blank" rel="noopener noreferrer">
                <v-icon size="20" class="ico">{{ social.icon }}</v-icon>
              </a>
            </div>
          </div>
        </div>
      </div>  
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    contacts: [
      { icon: 'mdi-map-marker', title: 'Baneshwor-10, Kathmandu' },
      { icon: 'mdi-email', title: 'contact@spellinnovation.com' },
      { icon: 'mdi-phone-classic', title: '01450000' },
      { icon: 'mdi-cellphone', title: '+9779823009044' },
      { icon: 'mdi-cellphone', title: '+9779823009045' }
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
      { title: 'Foundation', to: '/' },
      { title: 'About', to: '/' },
      { title: 'Activities', to: '/' },
    ], 
    socials: [
      { title: 'Facebook', icon: 'mdi-facebook', href: 'https://www.facebook.com' },
      { title: 'Twitter', icon: 'mdi-twitter', href: 'https://www.twitter.com' },
      { title: 'LinkedIn', icon: 'mdi-linkedin', href: 'https://www.linkedin.com' },
      { title: 'Instagram', icon: 'mdi-instagram', href: 'https://www.instagram.com' }
    ]
  }),
  methods: {
    goto(link) {
      if(this.$route.path != link) this.$router.push(link)
    }
  }
}
</script>

<style scoped>
.footer { margin: 50px auto 30px auto; }
.other-title {
  font-size: 25px;
  margin-bottom: 8px;
}
.links {
  display: inline-flex;
  flex-direction: column;
  grid-gap: 10px;
}
.terms { 
  display: flex;
  flex-direction: row; 
  grid-gap: 16px;
}
.terms span {
  border: 1px solid white;
  transition: 250ms ease-in-out;
  height: 40px;
  line-height: 1;
  display: flex;
  align-items: center;
}
.terms span:hover { border-radius: 20px; }
.links span, .terms span {
  color: white !important;
  line-height: 1;
  cursor: pointer;
}
.links span:last-child { margin-bottom: 0 !important; }

/* Footer Social */
.ft-social {
  height: 40px;
  width: 40px;
  border: 1px solid white;
  transition: ease-in-out 250ms;
}
.ft-social a { 
  height: 100%;
  width: 100%;
  text-decoration: none; 
  display: flex;
  align-items: center;
  justify-content: center;
}
.ft-social:hover {
  background-color: white;
  border-radius: 50%;
}
.ft-social:hover .ico { color: purple; }
@media (max-width: 960px) {
  .sc { width: 100% !important; }
}
@media (min-width: 1263px) {
  .sc { width: 60% !important; }
}
</style>