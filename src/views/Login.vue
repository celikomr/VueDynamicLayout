<template>
  <v-main class="login">
    <v-container>
      <v-row justify="center" align="center" style="margin-top: 20%">
        <v-col cols="12" md="6">
          <div class="text-center mb-6">
            <v-img src="@/assets/tt.png" class="logo d-none d-sm-flex"></v-img>
            <h2 class="mb-3 font-weight-regular">Welcome to conceptwave</h2>
            <p class="font-weight-thin">
              If you access and use <code>:this Web Site (the "Site")</code>,
              you accept the obligation of the necessary terms. If you do not
              agree, please do not use this "Site".
            </p>
          </div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="username"
              :counter="20"
              :rules="rules"
              required
              filled
              color="cyan lighten-2"
              placeholder="username"
              prepend-inner-icon="mdi-account-outline"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :counter="20"
              :rules="rules"
              required
              filled
              placeholder="password"
              prepend-inner-icon="mdi-lock-outline"
              color="cyan lighten-2"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              label="agree policy"
              required
              color="cyan lighten-2"
              :rules="[(v) => !!v || 'You must agree to continue!']"
            ></v-checkbox>

            <v-btn
              block
              color="cyan lighten-2"
              dark
              class="text-capitalize"
              @click="login"
            >
              Login
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    username: "",
    password: "",
    show: false,
    rules: [
      (v) => !!v || "Field is required",
      (v) => (v && v.length <= 20) || "Field must be less than 10 characters",
    ],
    checkbox: false,
  }),

  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.$refs.form.reset();
        this.$refs.form.resetValidation();
        this.$router.push("/order-entry");
      }
    },
  },
};
</script>

<style scoped>
.logo {
  position: absolute;
  top: 0;
  left: 35%;
  width: 30%;
}
</style>