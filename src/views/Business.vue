<template>
  <v-container id="business">
    <div class="display-1 mb-5 text-center" data-aos="fade-right">Businesses Of Spell Innovation</div>   
    <div class="ul">
      <div v-for="(b, i) in business" :key="i" data-aos="zoom-in" data-aos-duration="250">
        <div class="business">
          <img :src="b.img" height="100" :alt="b.title">
          <div class="bus-title text-uppercase mt-2 primary--text">{{ b.title }}</div>
          <div class="bus-desc text-capitalize secondary--text">{{ b.desc }}</div>
        </div>
      </div>
    </div>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    business: [
      { img: require('../assets/img/img1.png'), title: 'spell soft', desc: 'software development company' },
      { img: require('../assets/img/img2.png'), title: 'spell digital media', desc: 'digital marketing company' },
      { img: require('../assets/img/img3.png'), title: 'spell trading', desc: 'computer & peripheral supplies' },
      { img: require('../assets/img/img4.png'), title: 'spell hosting', desc: 'software development company' },
      { img: require('../assets/img/img5.png'), title: 'spell SMS', desc: 'software development company' },
      { img: require('../assets/img/img6.png'), title: 'eduspell', desc: 'nepal\'s e-learning platform' },
    ]  
  })  
}
</script>

<style scoped>
.ul { 
  margin: 0; 
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
.business {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 30vh;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,.05);
  background: #fff;
  transition: ease-in-out 250ms;
}
.business:hover { 
  box-shadow: 0 1px 30px 0 rgb(0 0 0 / 14%); 
  transform: translateY(-6px);
}
.bus-title { font-size: 28px; line-height: 1.25; }


/* Media Query */
@media (max-width: 1250px) {
  .banner { height: 75vh; }
  .bus-title { font-size: 25px; }
  .ul { grid-gap: 16px; }
}
@media (max-width: 960px) {
  .banner { height: 60vh; }
  .bus-title { font-size: 22px; }
}
@media (max-width: 800px) {
  .banner { height: 45vh; }
  .ul { grid-template-columns: repeat(2, 1fr); grid-gap: 12px; }
  .business img { height: 110px; }
  .bus-title { font-size: 20px; }
}
@media (max-width: 600px) {
  .banner { height: 35vh; }
  .business { min-height: 25vh; }
  .bus-title { font-size: 18px; }
}
@media (max-width: 450px) {
  .banner { height: 30vh; }
  .bus-title { font-size: 16px; }
}
@media (max-width: 400px) {
  .ul { grid-template-columns: repeat(1, 1fr); }
}
</style>