<template>
  <v-container id="about">
    <div class="display-1 mb-5 text-right" data-aos="fade-left"></div>
    <div class="what">
      <div data-aos="fade-left">
        <div class="display-1 mb-5">Who We Are...</div>
        <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis sequi amet quidem! Molestias, molestiae quas exercitationem consectetur id illo officia, maxime ex atque nam quia? Voluptatibus, sunt quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eveniet excepturi temporibus atque omnis totam aliquam est, rem, sint animi maxime, ipsa commodi quae cumque libero. Corporis labore reiciendis eos?</p>
        <v-btn color="secondary" class="mt-3 text-capitalize" rounded large elevation="0" width="150">
          <span style="font-weight: 400;">read More</span>
          <v-icon size="18" right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
      <div class="what-item" data-aos="fade-right">
        <div v-for="(item, a) in items" :key="a" class="pa-1 pa-sm-3 pa-md-5 pa-lg-7 d-flex what-item-item" data-aos="zoom-in">
          <div>
            <v-icon class="secondary pa-3" style="border-radius: 50%;" dark>{{ item.icon }}</v-icon>
          </div>
          <div class="ml-3">
            <div class="title mb-2" style="line-height: 1.25;">{{ item.name }}</div>
            <div class="desc">Praesent nonummy mi in odio. Mauris sollicitudin fermentum libero.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="display-1 mb-5 mt-16 text-right" data-aos="fade-right">What Do We Offer...</div> 
    <div class="about-item pa-3 pa-sm-4 pa-md-5 pa-lg-6" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div v-for="(item, a) in offers" :key="a" class="item pa-4 pa-1 pa-sm-3 pa-md-5 pa-lg-7" data-aos="zoom-in">
        <v-img :src="item.img" :lazy-src="item.img" :alt="item.name" max-width="80" max-height="80" />
        <div class="title mb-2 mt-4" style="line-height: 1.25;">{{ item.name }}</div>
        <div class="desc">Duis vel nibh at velit scelerisque suscipit. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.</div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: 'mdi-database', name: 'Data Analysis' },
      { icon: 'mdi-heart-outline', name: 'Engaging Content' },
      { icon: 'mdi-arm-flex-outline', name: 'Web Expertise' },
      { icon: 'mdi-developer-board', name: 'App Development' }
    ],
    offers: [
      { img: 'https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/141.png', name: 'Creative Ideas' },
      { img: 'https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/138.png', name: 'Innovative Tools' },
      { img: 'https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/188.png', name: 'Performance Optmized' },
      { img: 'https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/298.png', name: 'Goal Achievement' }
    ]
  })
}
</script>

<style scoped>
.what {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
}
.desc {
  line-height: 1.4;
  font-size: 15px;
  font-weight: 300;
}
.about-item { 
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  box-shadow: 0 1px 30px 0 rgb(0 0 0 / 14%);  
  text-align: center;
  border-radius: 5px;
}
.what-item { 
  display: grid;
  grid-template-columns: calc(50% - 8px) calc(50% - 8px); 
  grid-gap: 16px;
}
.what-item-item {
  border: 1px solid rgb(0 0 0 / 20%) !important;
  border-radius: 5px; 
  transition: ease-in-out 250ms !important;
}
.what-item-item:hover { 
  border: 1px solid transparent;
  box-shadow: 0 1px 30px 0 rgb(0 0 0 / 14%); 
  transform: translateY(-6px) !important;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (max-width: 960px) {
  .what { grid-template-columns: 100%; }
  .about-item { grid-template-columns: 50% 50%; }
}
@media (max-width: 650px) {
  .what-item { grid-template-columns: 100%; }
}
@media (max-width: 500px) {
  .about-item { grid-template-columns: 100%; }
}
</style>