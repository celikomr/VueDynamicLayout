<template>
  <v-main>
    <Header />
    <v-container>
      <v-row justify="center" align="center" style="margin-top: 22%">
        <v-col align="center">
          <v-alert
            icon="mdi-home-city-outline"
            prominent
            text
            color="cyan lighten-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            quibusdam voluptatum placeat adipisci aliquid molestiae animi earum,
            fugit facilis modi natus. Asperiores ea sed libero eveniet aperiam
            voluptate eos provident?
          </v-alert>
          <v-btn route to="/order-entry" outlined>Route to order entry</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
