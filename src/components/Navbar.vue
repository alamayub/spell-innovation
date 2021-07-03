<template>
  <div>
    <v-app-bar app color="white" elevate-on-scroll>
      <div class="container pa-0 d-flex justify-space-between align-center">
        <div class="d-flex">
          <v-img alt="Spell Innovation Logo" class="shrink d-block d-sm-block d-md-none" contain src="../assets/logo.png" transition="scale-transition" width="55" />
          <v-img alt="Sepll Innovation Logo & Name" class="shrink d-none d-sm-none d-md-block" contain src="../assets/logo_text.png" transition="scale-transition" width="170" />
        </div>

        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-block d-sm-block d-md-none secondary--text"></v-app-bar-nav-icon>
        <div class="d-none d-sm-none d-md-block">
          <v-btn v-for="(item, i) in  items" :key="i" color="secondary" class="text-capitalize mr-2 btn" style="font-weight: 500;" text :to="item.to">
            <v-icon size="18" left>{{ item.icon }}</v-icon>
            <span>{{ item.name }}</span>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer style="background: linear-gradient(90deg, rgba(243,108,39,1) 0%, rgba(156,39,176,1) 100%);" dark v-model="drawer" app bottom>
      <v-list expand nav tile>
        <v-list-item-group v-model="selectedItem">
          <v-list-item v-for="(item, i) in items" :key="i" :to="`${item.to}`" @click="drawer = false">
            <v-list-item-icon class="mx-3">
              <v-icon size='20' v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.name" style="letter-spacing: 1px;" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>  
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    selectedItem: 0,
    items: [
      { name: 'Home', to: '/', icon: 'mdi-home-outline' },
      { name: 'Business', to: '/business', icon: 'mdi-handshake-outline', },
      { name: 'About Us', to: '/about', icon: 'mdi-information-outline' },
      { name: 'News', to: '/news', icon: 'mdi-newspaper' },
      { name: 'Blogs', to: '/blogs', icon: 'mdi-post' },
      { name: 'Contact', to: '/contact', icon: 'mdi-account-box-outline' },
    ]
  })
}
</script>

<style scoped>
.btn:last-child { margin-right: 0 !important; }
</style>