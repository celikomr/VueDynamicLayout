<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="username"
          outlined
          placeholder="username"
        ></v-text-field>
        <v-text-field
          v-model="password"
          outlined
          placeholder="password"
        ></v-text-field>
        <v-btn class="text-capitalize" block @click="add">Add new user</v-btn>
      </v-col>
      <v-col cols="12" md="8">
        <UserList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserList from "@/components/UserList";
import { mapActions } from "vuex";

export default {
  components: {
    UserList,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("user", ["post"]),
    add() {
      if (this.username && this.password) {
        this.post({ username: this.username, password: this.password });
      } else {
        alert("tüm alanları doldurun!");
      }
    },
  },
};
</script>