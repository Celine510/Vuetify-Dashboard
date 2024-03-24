<template>
  <v-layout class="rounded rounded-md">
    <!-- 頂部 -->
    <v-app-bar :elevation="4">
      <template #prepend>
        <v-app-bar-nav-icon variant="text" @click.stop="$event => drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/"
          class="text-decoration-none"> Dashboard App </router-link>
        </v-toolbar-title>
      </template>
      <template #append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-avatar v-bind="props" size="50" color="blue">C5</v-avatar>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in menuItems"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <v-navigation-drawer expand-on-hover rail v-model="drawer">
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-note-outline" title="Posts" :to="'/posts'"></v-list-item>
        <v-list-item prepend-icon="mdi-comment-outline" title="Comments" :to="'/comments'"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="min-height: 300px;">
      <div class="pa-5">
        <router-view></router-view>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const menuItems = ref(['Profile','Settings','Logout']);

</script>