<template>
  <v-card class="mb-3" outlined>
    <v-card-title> {{ user.username }} </v-card-title>
    <v-card-subtitle>{{ user.password }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: ["user"],
};
</script>