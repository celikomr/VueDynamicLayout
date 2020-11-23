<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4"></v-col>
      <v-col cols="12" md="8">
        <CommercialInfo />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CommercialInfo from "../components/info/CommercialInfo";

export default {
  components: {
    CommercialInfo,
  },
};
</script>