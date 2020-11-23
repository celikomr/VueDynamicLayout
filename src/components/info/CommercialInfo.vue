<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-text-field
          hide-details
          filled
          disabled
          value="1-5547690"
          label="Service Request"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          hide-details
          filled
          disabled
          value="Order"
          label="Service Request Type"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          hide-details
          filled
          disabled
          value="TTVPN"
          label="Product Code"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          hide-details
          filled
          disabled
          value="1042"
          label="Order Code"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          hide-details
          filled
          disabled
          value="Activation"
          label="Customer Order Type"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          hide-details
          filled
          disabled
          value="Normal"
          label="Priority"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          hide-details
          :items="items"
          filled
          label="Reason Code"
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          hide-details
          filled
          disabled
          value="1042"
          label="Order Code"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field hide-details filled label="Form Id"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              hide-details
              v-model="dateFormatted"
              label="Date"
              hint="MM/DD/YYYY format"
              filled
              persistent-hint
              append-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" md="12">
        <v-select
          hide-details
          :items="items"
          filled
          label="Regional Directorate Signed"
        ></v-select>
      </v-col>
      <v-col cols="12" md="12">
        <v-select
          hide-details
          :items="items"
          filled
          label="Signed Provincial Directorate"
          disabled
        ></v-select>
      </v-col>
      <v-col cols="12" md="12">
        <v-select
          hide-details
          :items="items"
          filled
          disabled
          label="Signed Directorate"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: (vm) => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu: false,
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>