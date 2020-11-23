<template>
  <v-app-bar app>
    <v-btn route to="/order-entry" text class="text-capitalize ml-2"
      >Order Enrty</v-btn
    >
    <v-btn route to="/worklist" text class="text-capitalize ml-2"
      >Worklist</v-btn
    >
    <v-btn text class="text-capitalize ml-2">Tools</v-btn>
    <v-spacer></v-spacer>
    <v-btn route to="/" text class="text-capitalize">
      <span class="mr-2">Logout</span>
      <v-icon>mdi-logout-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>