<template>
  <div>
    <User v-for="user in USER_LIST" :key="user.id" :user="user" />
  </div>
</template>

<script>
import User from "./User";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    User,
  },
  computed: {
    ...mapState("user", ["USER_LIST"]),
  },
  methods: {
    ...mapActions("user", ["getAll"]),
  },
  created() {
    this.getAll()
  },
};
</script>