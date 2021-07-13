<template>
  <v-app-bar app color="white" elevate-on-scroll>
    <div class="container d-flex align-center px-0">
      <div>
        <v-img alt="Spell Innovation Logo" class="shrink d-block d-sm-block d-md-none" contain src="../assets/logo.png" transition="scale-transition" width="55" />
        <v-img alt="Sepll Innovation Logo & Name" class="shrink d-none d-sm-none d-md-block" contain src="../assets/logo_text.png" transition="scale-transition" width="170" />
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="setDrawer(!drawer)" class="d-block d-sm-block d-md-none secondary--text"></v-app-bar-nav-icon>
      <div class="d-none d-sm-none d-md-block">
        <v-btn v-for="(item, i) in  items" :key="i" color="secondary" class="text-capitalize mr-2 btn" style="font-weight: 500;" text :to="item.to">
          <v-icon size="18" left>{{ item.icon }}</v-icon>
          <span>{{ item.name }}</span>
        </v-btn>
      </div>
    </div>
  </v-app-bar> 
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { name: 'Home', to: '/', icon: 'mdi-home-outline' },
      { name: 'Business', to: '/business', icon: 'mdi-handshake-outline', },
      { name: 'About Us', to: '/about', icon: 'mdi-information-outline' },
      { name: 'News', to: '/news', icon: 'mdi-newspaper' },
      { name: 'Blogs', to: '/blogs', icon: 'mdi-post' },
      { name: 'Contact', to: '/contact', icon: 'mdi-account-box-outline' },
    ]
  }),
  computed: {
    ...mapState(['drawer']),
  },
  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
  },
}
</script>

<style scoped>
.btn:last-child { margin-right: 0 !important; }
</style>