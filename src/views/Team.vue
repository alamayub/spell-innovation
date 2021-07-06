<!--<template>
  <div>
    <div class="text__banner" data-aos="zoom-in" data-aos-duration="250">
      <div class="text__banner__content text-h3 text-md-h2 text-lg-h1">
        <div style="line-height: 1;">Spell Innovation</div>
        <span class="mt-3 mt-md-5 text-h5 text-md-h4">Our Team</span>
      </div>
    </div>
    <div class="container text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minima asperiores inventore rem non, quos consequuntur sint illo molestias a debitis, sit hic iusto, aut obcaecati! Suscipit cupiditate rerum neque?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt et beatae tenetur dolor? Temporibus voluptatem delectus omnis vitae aperiam. Excepturi incidunt cum laudantium voluptatem minus pariatur? Praesentium, exercitationem asperiores.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis nostrum iste saepe, perspiciatis doloremque adipisci ab nisi quidem necessitatibus, dolores minus nihil consectetur? Adipisci, pariatur libero. In, vel ea.
    </div>
    <div class="container team">
      <div class="team__card" v-for="(team, i) in images" :key="i" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <img :src="team.image" :alt="team.name">
        <div class="px-3 pt-3 team__content">
          <div class="team__title">{{ team.character }}</div>
          <p>{{ team.name }}</p>
        </div> 
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  data: () => ({
    dialog: false,  
    image: null,  
    images: [
      { character: 'Scarlet Witch', name: 'Wanda Maximoff', image: 'https://media.glamour.com/photos/603979401f89f5366653e62a/1:1/w_2159,h_2159,c_limit/HAM1280_106_comp_v020_20210112_r709.1065.jpg' },
      { character: 'Captain Marvel', name: 'Carol Danvers', image: 'https://s3.amazonaws.com/com.marvel.terrigen/prod/captainmarvel_lob_crd_06.jpg' },
      { character: 'Thor: God of Thunder', name: 'Thor Odinson', image: 'https://i.insider.com/5b7acee73cccd122008b45ac?width=700' },
      { character: 'Captain America', name: 'Steve Rogers', image: 'https://static.wikia.nocookie.net/spiderman-films/images/4/4e/CaptainAmerica_AOU_character-art-poster.jpg' },

      { character: 'Iron Man', name: 'Anthony Edward Tony Stark', image: 'https://images.indianexpress.com/2019/04/iron-man-avengers-1200.jpeg' },
      { character: 'Doctor Strange', name: 'Dr. Stephen Strange', image: 'https://cdn.vox-cdn.com/thumbor/8w6m6Sdl8fkNt7UWPJr5hhNasqA=/0x0:1500x750/1400x1400/filters:focal(762x94:1002x334):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51717777/strange.0.jpg' },
      { character: 'Spider-Man', name: 'Peter Parker', image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg' },
      { character: 'Black Panther', name: 'King T\'Challa', image: 'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg' },

      { character: 'Hulk', name: 'Dr. Bruce Banner', image: 'https://imgix.bustle.com/uploads/image/2020/5/5/834af3f0-7b7d-4147-bf5a-6193dcbe551e-hulk.jpg' },
      { character: 'Vision', name: 'Vision', image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/vision_1.jpg' },
      { character: 'Gamora', name: 'Gamora Zen Whoberi Ben', image: 'https://www.cnet.com/a/img/DKEFGKIXoJ8E4kD2sTlx7vUQBJs=/1200x675/2018/11/14/424a7378-fa4e-412c-9ef9-751e81e648fa/gamora.jpg' },
      { character: 'Black Widow', name: 'Natasha Romanoff', image: 'https://img.etimg.com/thumb/msid-80880688,width-650,imgsize-640206,,resizemode-4,quality-100/black-widow-was-originally-scheduled-for-release-in-may-2020-but-was-delayed-due-to-the-coronavirus-pandemic-.jpg' },

      { character: 'Hawkeye', name: 'Clint Barton', image: 'https://media1.popsugar-assets.com/files/thumbor/06jLVFo-_2l39gpms1wwgQeK0gY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/04/27/830/n/1922283/263611d295140995_MCDAVEN_EC081/i/Clint-BartonHawkeye.jpg' },
      { character: 'Valkyrie', name: 'Brunnhilde', image: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/6e/Valkyrie_Profile2.jpg' },
      { character: 'Winter Soldier', name: 'Sargent Bucky Barnes', image: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Sebastian_Stan_as_Bucky_Barnes.jpg' },
    ]
  }), 
}
</script>

<style scoped>
.team {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24%, 1fr));
  grid-gap: 12px;  
  margin-bottom: 50px;
}
.team__card {
  /* border: 1px solid rgb(0 0 0 / 20%);  */
  border-radius: 5px; 
  transition: ease-in-out 250ms;
  overflow: hidden;
  position: relative;
  display: grid;
}
.team__card img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.team__content {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgb(0 0 0 / 30%);
  color: #fff;
}
.team__title {
  font-weight: 500;
  font-size: 22px;
  line-height: 1;
  display: block;
}
.team__content p {
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  display: block;
  line-height: 1;
  margin-top: 6px;
}

@media (max-width: 1060px) {
  .team { grid-template-columns: repeat(auto-fit, minmax(32%, 1fr)); }  
}
@media (max-width: 600px) {
  .team { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }  
}
@media (max-width: 400px) {
  .team { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }  
}
</style>-->


<template>
  <div class="Team">
    <div class="text__banner" data-aos="zoom-in" data-aos-duration="250">
      <div class="text__banner__content text-h3 text-md-h2 text-lg-h1">
        <div style="line-height: 1;">Spell Innovation</div>
        <span class="mt-3 mt-md-5 text-h5 text-md-h4">Our Team</span>
      </div>
    </div>
    <div class="container text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minima asperiores inventore rem non, quos consequuntur sint illo molestias a debitis, sit hic iusto, aut obcaecati! Suscipit cupiditate rerum neque?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt et beatae tenetur dolor? Temporibus voluptatem delectus omnis vitae aperiam. Excepturi incidunt cum laudantium voluptatem minus pariatur? Praesentium, exercitationem asperiores.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis nostrum iste saepe, perspiciatis doloremque adipisci ab nisi quidem necessitatibus, dolores minus nihil consectetur? Adipisci, pariatur libero. In, vel ea.
    </div>
    <div class="container team">
      <div class="team__card" v-for="(member, i) in members" :key="i" data-aos="zoom-in">
        <div class="team__card__img">
          <img :src="member.image" :alt="member.name">
        </div>
        <div class="team__card__content">
          <div class="team__card__content__detail text-center white--text">
            <div class="team__card__content__title">{{ member.name }}</div>
            <div class="team__card__content__subtitle mt-1">{{ member.character }}</div>
          </div>
          <div class="team__card__content__social">
            <v-btn icon color="white" v-for="(item, s) in socials" :key="s" target="_blank" :href="item.to">
              <v-icon size="20">{{ item.icon }}</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,  
    image: null,  
    members: [
      { character: 'Scarlet Witch', name: 'Wanda Maximoff', image: 'https://media.glamour.com/photos/603979401f89f5366653e62a/1:1/w_2159,h_2159,c_limit/HAM1280_106_comp_v020_20210112_r709.1065.jpg' },
      { character: 'Captain Marvel', name: 'Carol Danvers', image: 'https://s3.amazonaws.com/com.marvel.terrigen/prod/captainmarvel_lob_crd_06.jpg' },
      { character: 'Thor: God of Thunder', name: 'Thor Odinson', image: 'https://i.insider.com/5b7acee73cccd122008b45ac?width=700' },
      { character: 'Captain America', name: 'Steve Rogers', image: 'https://static.wikia.nocookie.net/spiderman-films/images/4/4e/CaptainAmerica_AOU_character-art-poster.jpg' },

      { character: 'Iron Man', name: 'Tony Stark', image: 'https://images.indianexpress.com/2019/04/iron-man-avengers-1200.jpeg' },
      { character: 'Doctor Strange', name: 'Dr. Stephen Strange', image: 'https://cdn.vox-cdn.com/thumbor/8w6m6Sdl8fkNt7UWPJr5hhNasqA=/0x0:1500x750/1400x1400/filters:focal(762x94:1002x334):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51717777/strange.0.jpg' },
      { character: 'Spider-Man', name: 'Peter Parker', image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg' },
      { character: 'Black Panther', name: 'King T\'Challa', image: 'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg' },

      { character: 'Hulk', name: 'Dr. Bruce Banner', image: 'https://imgix.bustle.com/uploads/image/2020/5/5/834af3f0-7b7d-4147-bf5a-6193dcbe551e-hulk.jpg' },
      { character: 'Vision', name: 'Vision', image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/vision_1.jpg' },
      { character: 'Gamora', name: 'Gamora', image: 'https://www.cnet.com/a/img/DKEFGKIXoJ8E4kD2sTlx7vUQBJs=/1200x675/2018/11/14/424a7378-fa4e-412c-9ef9-751e81e648fa/gamora.jpg' },
      { character: 'Black Widow', name: 'Natasha Romanoff', image: 'https://img.etimg.com/thumb/msid-80880688,width-650,imgsize-640206,,resizemode-4,quality-100/black-widow-was-originally-scheduled-for-release-in-may-2020-but-was-delayed-due-to-the-coronavirus-pandemic-.jpg' },

      { character: 'Hawkeye', name: 'Clint Barton', image: 'https://media1.popsugar-assets.com/files/thumbor/06jLVFo-_2l39gpms1wwgQeK0gY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/04/27/830/n/1922283/263611d295140995_MCDAVEN_EC081/i/Clint-BartonHawkeye.jpg' },
      { character: 'Winter Soldier', name: 'Bucky Barnes', image: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Sebastian_Stan_as_Bucky_Barnes.jpg' },
    ],
    socials: [
      { icon: 'mdi-facebook', to: 'https://www.facebook.com' },
      { icon: 'mdi-twitter', to: 'https://www.twitter.com' },
      { icon: 'mdi-instagram', to: 'https://www.instagram.com' },
      { icon: 'mdi-youtube', to: 'https://www.youtube.com' }
    ]
  }), 
}
</script>

<style scoped>
.team {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  grid-gap: 20px;
}
.team__card {
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 20%);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, rgba(243,108,39,1) 0%, rgba(156,39,176,1) 100%); 
}
.team .team__card .team__card__img { 
  height: 350px;
  transition: .5s;
  z-index: 10000;
  transform-origin: top;
  border-radius: 15px;
  overflow: hidden;
}
.team .team__card .team__card__img img {
  width: 100%;
  display: block;  
  object-fit: cover;
  height: 100%;  
}
.team .team__card:hover .team__card__img { transform: translateY(30px) scale(.6); }
.team .team__card:hover .team__card__content { transform: translateY(0); }
.team .team__card .team__card__content {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: .5s;
  padding-bottom: 20px;
}
.team .team__card .team__card__content .team__card__content__title {
  font-size: 22px;
  line-height: 1;
}
.team .team__card .team__card__content .team__card__content__subtitle {
  font-size: 16px;
  line-height: 1;
}

@media (max-width: 1060px) {
  .team { grid-gap: 16px; grid-template-columns: repeat(auto-fit, minmax(30%, 1fr)); }
  .team .team__card .team__card__img { height: 325px; }
  .team .team__card .team__card__content { padding-bottom: 18px; }
  .team .team__card .team__card__content .team__card__content__title { font-size: 21px; }
  .team .team__card .team__card__content .team__card__content__subtitle { font-size: 15px; }
}
@media (max-width: 900px) {
  .team .team__card .team__card__img { height: 300px; }
  .team .team__card .team__card__content { padding-bottom: 15px; }
  .team .team__card .team__card__content .team__card__content__title { font-size: 20px; }
  .team .team__card .team__card__content .team__card__content__subtitle { font-size: 14px; }
}
@media (max-width: 760px) {
  .team { grid-gap: 12px; grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
  .team .team__card .team__card__img { height: 280px; }
  .team .team__card .team__card__content { padding-bottom: 12px; }
  .team .team__card .team__card__content .team__card__content__title { font-size: 19px; }
  .team .team__card .team__card__content .team__card__content__subtitle { font-size: 13px; }
}
@media (max-width: 600px) {
  .team .team__card .team__card__img { height: 260px; }
  .team .team__card .team__card__content { padding-bottom: 10px; }
  .team .team__card .team__card__content .team__card__content__title { font-size: 18px; }
  .team .team__card .team__card__content .team__card__content__subtitle { font-size: 12px; }
}
</style>
