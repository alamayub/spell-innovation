<template>
  <div>
    <v-app-bar app color="white" dark elevate-on-scroll>
      <div class="d-flex align-center">
        <v-img alt="Spell Innovation Logo" class="d-block d-sm-none" contain src="../assets/logo.png" transition="scale-transition" width="50" />
        <v-img alt="Spell Innovation Name" class="d-none d-sm-flex" contain src="../assets/logo_text.png" width="180" />
      </div>
      <v-spacer />
      <div class="main-menu">
        <ul class="d-flex">
          <li v-for="(item, i) in items" :key="i">
            <v-btn color="primary" class="text-capitalize" style="font-weight: 400;" tile text min-height="62" :href="item.to">{{ item.name }}</v-btn>
            <v-list class="list pa-0" v-if="item.children">
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item style="min-height: 60px;" v-for="(child, c) in item.children" :key="c" link>
                  <v-list-item-content class="primary--text">{{ child.name }}</v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </li>
        </ul>
      </div>
    </v-app-bar>
  </div>  
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { name: 'Home', to: '#home' },
      { 
        name: 'Business', 
        to: '#business',
        children: [
          { name: 'Spell Soft', to: '' },
          { name: 'Spell Digital Media', to: '' },
          { name: 'Spell Trading', to: '' },
          { name: 'Spell Hosting', to: '' },
          { name: 'Spell SMS', to: '' },
          { name: 'Eduspell' }
        ]
      },
      { name: 'About Us', to: '#about' },
      { 
        name: 'Services', 
        to: '#services',
        children: [
          { name: 'News', to: '' },
          { name: 'Blogs', to: '' }
        ]
      },
      { name: 'Contact', to: '#contact' },
    ]
  })
}
</script>

<style scoped>
/* main menu */
.main-menu ul .list { 
  display: none; 
  position: absolute;
  flex-direction: column;
  top: 65px;
  min-width: 250px;
  background-color: white;
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, .25);
}
.main-menu li:hover ul { display: flex; }
.main-menu li:hover .list { display: block; }
</style>