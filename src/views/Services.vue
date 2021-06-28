<template>
  <v-container id="services">
    <div class="display-1 mb-5 text-center" data-aos="fade-right">Our Services</div>   
    <div class="ul">
      <div v-for="(item, i) in items" :key="i" data-aos="zoom-in" data-aos-duration="250">
        <div class="business pa-3 pa-sm-4 pa-md-5 pa-lg-6">
          <v-icon color="primary" size="50" class="icon">{{ item.icon }}</v-icon>
          <div class="bus-title text-capitalize mt-8 mb-2">{{ item.name }}</div>
          <div class="bus-desc">There are many variations of passages of lorem Ipsum available but the new majority have suffered.</div>
        </div>
      </div>
    </div>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: 'mdi-home-outline', name: 'web development', },
      { icon: 'mdi-currency-usd', name: 'mobile app', },
      { icon: 'mdi-account-outline', name: 'hosting', },
      { icon: 'mdi-home-outline', name: 'on demand app', },
      { icon: 'mdi-currency-usd', name: 'digital marketing', },
      { icon: 'mdi-account-outline', name: 'e-commerce', },
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
  background-color: #f36c27;
  color: #fff !important;
}
.business:hover .icon { color: #fff !important; }
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