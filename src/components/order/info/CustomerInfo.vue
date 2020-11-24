<template>
  <v-container>
    <h2 class="mb-3 font-weight-regular">Customer Info</h2>
    <v-row>
      <v-col cols="12" md="12">
        <v-text-field
          hide-details
          filled
          disabled
          value="Omer Celik"
          label="Customer Name"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          hide-details
          filled
          disabled
          value="+90 (530) 333 35 35"
          label="Customer Phone Number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          hide-details
          filled
          disabled
          value="+90(232) 333 35 35"
          label="Customer Fax Number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          hide-details
          filled
          disabled
          value="+90 (533) 333 35 35"
          label="Customer Mobile Number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="12">
        <v-text-field
          hide-details
          filled
          disabled
          value="oclk@outlook.com.tr"
          label="Customer Email"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          hide-details
          filled
          disabled
          value="test"
          label="Customer Segmentation"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          hide-details
          filled
          disabled
          value="customer"
          label="Customer Type"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>