<template>
  <div class="about">
    <div class="text__banner" data-aos="zoom-in" data-aos-duration="250">
      <div class="text__banner__content text-h3 text-md-h2 text-lg-h1">
        <div style="line-height: 1;">Spell Innovation</div>
        <span class="mt-3 mt-md-5 text-h5 text-md-h4">about us</span>
      </div>
    </div>

    <!-- Overview -->
    <div class="container">
      <p data-aos="fade-left">{{ intro1 }}</p>
      <p data-aos="fade-right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ intro2 }}</p>
    </div>

    <!-- Our Mission -->
    <div class="text-h4 text-sm-h4 text-md-h3 mb-3 mb-sm-4 mb-md-5 mb-lg-6 mt-4 container" data-aos="fade-up">Our Mission</div>
    <div class="container mission">
      <div class="mission__img" data-aos="fade-right">
        <img src="../assets/mission.jpg" alt="Our Mission">
      </div>
      <div class="mission__content" data-aos="fade-left">
        <p><b>Our Mission</b>{{ mission1 }}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Our Vision</b>{{ mission2 }}</p>
      </div>
    </div>

    <!-- Our Involvement background-color: rgba(227, 118, 58, .075); -->
    <div class="primary white--text" style="margin-top: 30px; margin-bottom: 30px; padding-top: 50px; padding-bottom: 50px;" data-aos="zoom-in">
      <div class="container">
        <div class="text-h5 text-md-h4 mb-5" data-aos="fade-up">Our Involvement</div>
        <ul>
          <li v-for="a in involvement" :key="a" data-aos="fade-left">{{ a }}</li>
        </ul>
      </div>
    </div>

    <!-- Our Services -->
    <div class="container text-h5 text-md-h4" data-aos="fade-up">Our Services</div>
    <div class="container services__container mb-5">
      <div class="services__container__item px-3 py-6 px-sm-4 py-sm-8 px-md-5 py-md-10 px-lg-6 py-lg-12" v-for="(item, i) in  services" :key="i" data-aos="zoom-in">
        <v-icon class="pa-4" style="background: linear-gradient(90deg, rgba(243,108,39,1) 0%, rgba(156,39,176,1) 100%);  border-radius: 50%;" color="white">{{ item.icon }}</v-icon>
        <div class="mb-1 mt-4 text-capitalize" style="line-height: 1.2; font-weight: bold; display: block; font-size: 20px;">{{ item.name }}</div>
        <div style="font-size: 14px;">There are many variations of passages of lorem Ipsum available but the new majority have suffered.</div>
      </div>
    </div>

    <!-- Our Projects & Clients -->
    <div class="secondary white--text" style="margin-top: 30px; margin-bottom: 30px; padding-top: 50px; padding-bottom: 50px;" data-aos="fade-up">
      <div class="container client">
        <div class="client__item text-center px-3 py-6 py-sm-8 py-md-10 py-lg-12" v-for="(item ,i) in items" :key="i" data-aos="zoom-in">
          <div style="font-size: 50px; line-height: 1;">{{ item.count }}</div>
          <div style="opacity: .8; font-size: 18px;">{{ item.title }}</div>
        </div>
      </div>
    </div>

    <!-- Our Services -->
    <div class="container offer mb-10">
      <div class="offer__content mb-3 mb-sm-3 mb-md-0">
        <div class="text-h5 text-md-h4 mb-3" data-aos="fade-left">Our Specialities</div>
        <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi inventore laborum odio, adipisci ullam vero fugiat ab animi quam magni ut ipsa, officiis ratione dolore possimus cupiditate eos vel.</p>
        <v-btn class="mt-4" data-aos="zoom-in" rounded width="150" dark large style="background: linear-gradient(90deg, rgba(243,108,39,1) 0%, rgba(156,39,176,1) 100%);">
          <span class="text-capitalize">more</span>
          <v-icon size="20" right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
      <div class="offer__container">
        <div class="offer__container__item d-flex pa-3 pa-sm-4 pa-md-5 pa-lg-6" v-for="(item, i) in  offers" :key="i" data-aos="zoom-in">
          <img :src="item.img" height="90" :alt="item.name">
          <div>
            <div class="mb-1 mt-4 text-capitalize" style="line-height: 1.2; font-weight: bold; display: block; font-size: 20px;">{{ item.name }}</div>
            <div style="font-size: 13px;">There are many variations of passages of lorem Ipsum.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    intro1: 'We are living in the era of Information Technology. There is no need to describe the importance and significance of the wide - spread use of information technology. SPELL INNOVATION PRIVATE LIMITED is a young company in Kathmandu, Nepal. We SPELL INNOVATION say we’re young because we’re peopled by young, energetic, curious and committed minds who are excited to solve one stop automated solution for your trade, industry, institution, organization and invention. Conceived with a vision to leave behind a legacy of transformed peoples as an organization, we place a high emphasis on working in partnership with customers. Depending on the size and field of your organization, we have different products and services to meet your requirements.',
    intro2: 'Spell Innovation began its business operation as a software, hardware and network solutions providing company in 2020. We change to match you needs as we say we very well understand the consequences of this and we actually do this to satisfy our client needs Our professionals take the time to understand your business needs, suggest reengineering processes and develop appropriate, costeffective solutions. Our experience has taught us that to provide any solutions; we need creativity and lots of inspired thinking, our experienced professionals along with the \'let-us-do-it\' attitude of the fresh talent is constantly pushing the horizons Our values of Integrity, Service, Candor, Kindness, Growth and Continually Increasing Competence govern our behavior towards all our stakeholders.',
    mission1: ' is to achieve the reputation of a quality, high standard and reliable solution and service Provider Company in the IT industry.',
    mission2: ' is to achieve 100% customer satisfaction by delivering quality products and services at an affordable cost. Our forward vision is to strive to become an entity in technology based corporate solutions, capable of demanding unconditional response from the targeted niche. We also believe that for our scope of improvisation – sky is the limit and we are always ready to take our achievements to the next level. We are growing and would always like to remain on the growing streak.',    
    involvement: [
      'ICT consultancy', 'Software development','Web development', 'App Development', 'Digital marketing', 
      'Graphic designing and Animation', 'Domain and hosting', 'Bulk SMS'
    ],
    services: [
      { icon: 'mdi-webpack', name: 'web development', },
      { icon: 'mdi-cellphone', name: 'mobile app', },
      { icon: 'mdi-web', name: 'hosting', },
      { icon: 'mdi-gesture-double-tap', name: 'on demand app', },
      { icon: 'mdi-elevation-rise', name: 'digital marketing', },
      { icon: 'mdi-shopping-outline', name: 'e-commerce', },
    ],
    items: [
      { count: 5454, title: 'Completed Projects' },
      { count: 456, title: 'Active Clients' },
      { count: 252, title: 'OnGoing Projects' },
      { count: 5456, title: 'Happy Clients' }
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
/* Mission */
.mission {
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 12px;
}
.mission__img img {
  width: 100%;
  display: block;  
  object-fit: cover;
  height: 100%; 
}
p {
  font-size: 18px;
  text-align: justify;
  display: block;
}

/* Services Container */
.services__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31%, 1fr));
  grid-gap: 20px;
}
.services__container__item {
  border: 1px solid rgba(0 0 0 / 10%);
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

/* Offer */
.offer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  grid-gap: 20px;
}
.offer__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  grid-gap: 12px;
}
.offer__container__item {
  grid-gap: 16px;
  border: 1px solid rgba(0 0 0 / 10%);
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms;
  overflow: hidden;
}
.services__container__item:hover, .offer__container__item:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px 0 rgba(0 0 0 / 20%);
  border: 1px solid transparent;
  border-radius: 4px;
}

ul li {
  font-size: large;
  list-style: square;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
}

@media (max-width: 1060px) {
  p { font-size: 17px; }
  .services__container { grid-gap: 16px; grid-template-columns: repeat(auto-fit, minmax(32%, 1fr)); }
  .offer { grid-template-columns: 100%; grid-gap: 16px; }
  ul { grid-template-columns: repeat(auto-fit, minmax(33%, 1fr)); }
}
@media (max-width: 840px) {
  .mission{ grid-template-columns: 100%; }
  p { font-size: 16px; }
  .services__container { grid-gap: 12px; grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
  ul { grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); }
}
@media (max-width: 600px) {
  .offer__container { grid-template-columns: 100%; }
}
@media (max-width: 500px) {
  p { font-size: 15px; }
  .services__container { grid-gap: 12px; grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
  ul { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
</style>