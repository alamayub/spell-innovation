<template>
  <div class="Business">
    <div class="text__banner" data-aos="zoom-in" data-aos-duration="250">
      <div class="text__banner__content text-h3 text-md-h2 text-lg-h1">
        <div style="line-height: 1;">Spell Innovation</div>
        <span class="mt-3 mt-md-5 text-h5 text-md-h4">spell business</span>
      </div>
    </div>
    <div class="spell_business">
      <div class="container">
        <div class="text-h4 text-sm-h4 text-md-h3 mb-3 mb-sm-4 mb-md-5 mb-lg-6" data-aos="fade-up">Spell Bussiness</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis unde incidunt labore eaque. Omnis laborum velit neque dignissimos perspiciatis vel ad, hic dolorem in, id maxime laboriosam eius temporibus.</p>
      </div>
      <div class="container spell_business__container">
        <a class="spell_business__item text-capitalize black--text white px-3 py-6 py-sm-8 py-md-10 py-lg-12" v-for="(item, i) in business" :key="i" data-aos="zoom-in" :href="`#${i}`">
          <img :src="item.img" :alt="item.title" height="80">
          <div class="mb-2 mt-5" style="opacity: .75; line-height: 1.2; font-weight: bold; display: block; font-size: 20px;">{{ item.title }}</div>
          <div style="font-size: 14px; opacity: .75;">{{ item.desc }}</div>
        </a>
      </div>
    </div>

    <div class="container d-flex flex-column" style="grid-gap: 30px; margin-bottom: 50px;">
      <div v-for="(b, i) in business" :key="i" class="business__item pa-5 pa-sm-7 pa-md-9 pa-lg-12" data-aos="zoom-in">
        <div :id="i" class="business__item__img" :style="{ order: i % 2 == 0 ? 1 : 2 }"><img :src="b.image" :alt="b.title"></div>
        <div :style="{ order: i % 2 == 0 ? 2 : 1 }">
          <div class="mb-2 text-capitalize" style="opacity: .75; line-height: 1; font-weight: bold; display: block; font-size: 22px;">{{ b.title }}</div>
          <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime quidem consectetur delectus, perspiciatis vel ut provident ex iure reprehenderit, quaerat necessitatibus? Amet esse placeat veritatis eveniet officia, eius quasi!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    business: [
      { img: require('../assets/img/img1.png'), title: 'spell soft', desc: 'software development company', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Applications-internet.svg/1024px-Applications-internet.svg.png' },
      { img: require('../assets/img/img2.png'), title: 'spell digital media', desc: 'digital marketing company', image: 'https://techsathi.com/wp-content/uploads/2021/03/DIGITAL-MARKETING.jpg' },
      { img: require('../assets/img/img3.png'), title: 'spell trading', desc: 'computer & peripheral supplies', image: 'https://digitrade.life/images/slider-img.png' },
      { img: require('../assets/img/img4.png'), title: 'spell hosting', desc: 'software development company', image: 'https://hewadict.com/files/2020/11/best-Web-Hosting.png' },
      { img: require('../assets/img/img5.png'), title: 'spell SMS', desc: 'software development company', image: 'https://storage.googleapis.com/dexatel_dashboard/blog/4/cover/sms-marketing-campaign-image.jpg' },
      { img: require('../assets/img/img6.png'), title: 'eduspell', desc: 'nepal\'s e-learning platform', image: 'https://blog.presentationload.com/wp-content/uploads/2016/09/Titelbild_Fotolia_94620967_S.jpg' },
    ],  
  })  
}
</script>

<style scoped>
.text__banner { margin-bottom: 0 !important; }
.spell_business { 
  margin-top: 0 !important;
  background-color: #fff; 
}
.spell_business__item {
  box-shadow: none !important;
  border: 1px solid rgba(243,108,39,.25) !important;
  border-radius: 6px !important;
  overflow: hidden;
  transition: ease-in-out 250ms;
  cursor: pointer;
}
.spell_business__item:hover {
  border: 1px solid transparent !important;
  box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%) !important;
}

/* Business Item */
.business__item {
  box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%) !important;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(47%, 1fr));
  align-items: center;
  grid-gap: 40px;
}
.business__item img {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
}
@media (max-width: 761px) {
  .business__item__img { order: 1 !important; }
}
</style>