<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img
        cover
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        height="64"
        src="https://picsum.photos/1920/1080?random"
      >
        <v-list>

          <v-list-item
            prepend-avatar="https://github.com/yurimarcon/avatars/blob/main/Colored/ToyFaces_Colored_BG_56.jpg?raw=true"
            subtitle="To do list"
            title="Samuel guedes"
          />
        </v-list>
      </v-img>

      <v-divider />

      <v-list
        density="compact"
        :lines="false"
        nav
      >

        <RouterLink
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >

          <v-list-item

            color="primary"
            :value="item"
          >
            <template #prepend>
              <v-icon :icon="item.icon" />
            </template>

            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item></RouterLink>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
    >

      <template #image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        />
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-app-bar-title>To do list</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)

  const items = [
    { text: 'Home', icon: 'mdi-folder', to: '/Home' },
    { text: 'About', icon: 'mdi-account-multiple', to: '/About' },
  ]
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #ffffff
  }
</style>
