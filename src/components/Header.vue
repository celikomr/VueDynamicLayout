<template>
  <v-app-bar app>
    <v-btn route to="/home" text class="text-capitalize mx-2">Home</v-btn>
    <v-btn route to="/order-entry" text class="text-capitalize"
      >Order Enrty</v-btn
    >
    <v-btn route to="/users" text class="text-capitalize ml-2"
      >Users</v-btn
    >
    <v-spacer></v-spacer>
    <v-btn route to="/" text class="text-capitalize">
      <span class="mr-2">Logout</span>
      <v-icon>mdi-logout-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>