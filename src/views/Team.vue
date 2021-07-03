<template>
  <div class="container team">
    <div class="team__card" v-for="(team, i) in images" :key="i" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <img :src="team.image" :alt="team.name">
      <div class="px-3 pt-3 team__content">
        <div class="team__title">{{ team.character }}</div>
        <p>{{ team.name }}</p>
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
</style>