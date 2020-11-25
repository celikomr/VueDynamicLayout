<template>
  <v-main style="background-color: #f5f5f5">
    <Header />
    <v-container>
      <v-card outlined class="my-13" style="background-color: #f5f5f5">
        <v-row class="pa-4" justify="space-between">
          <v-col cols="12" md="3">
            <v-treeview :open="initiallyOpen" :items="items" item-key="name">
              <template v-slot:prepend="{ item, open }">
                <v-icon v-if="!item.file">
                  {{ open ? "mdi-folder-open" : "mdi-folder" }}
                </v-icon>
                <v-icon v-else>
                  {{ files[item.file] }}
                </v-icon>
              </template>
              <template slot="label" slot-scope="{ item }">
                <v-btn
                  text
                  class="text-capitalize"
                  @click="component(item.type)"
                  >{{ item.name }}</v-btn
                >
              </template>
            </v-treeview>
          </v-col>

          <v-divider vertical></v-divider>

          <v-col cols="12" md="8" class="d-flex">
            <v-scroll-y-transition mode="out-in">
              <keep-alive>
                <component :is="selectedComponent"></component>
              </keep-alive>
            </v-scroll-y-transition>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card elevation="0" style="background-color: #f5f5f5">
          <v-row>
            <v-col cols="12" md="2">
              <v-btn block text class="text-capitalize">
                <v-icon left>mdi-plus-circle-outline</v-icon>
                Add items
              </v-btn>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn block text class="mr-3 text-capitalize">
                <v-icon left>mdi-delete-outline</v-icon>
                Delete items
              </v-btn>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn block text class="mr-3 text-capitalize">
                <v-icon left>mdi-close-box-outline</v-icon>
                Cancel Draft Order
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import Header from "@/components/common/Header";
import CommercialInfo from "@/components/order/info/CommercialInfo";
import CustomerInfo from "@/components/order/info/CustomerInfo";
import IotDevice from "@/components/order/products/child/IotDevice";
import StandardDiscount from "@/components/order/products/child/StandardDiscount";
import SmartIrrigation from "@/components/order/products/main/SmartIrrigation";
import SmartLighting from "@/components/order/products/main/SmartLighting";

export default {
  components: {
    Header,
    CommercialInfo,
    CustomerInfo,
    IotDevice,
    StandardDiscount,
    SmartIrrigation,
    SmartLighting,
  },
  data: () => ({
    item: [],
    initiallyOpen: ["public"],
    selectedComponent: "CommercialInfo",
    files: {
      info: "mdi-file-document-outline",
      main: "mdi-city-variant-outline",
      child: "mdi-home-city-outline",
    },
    items: [
      {
        name: "commercial info",
        file: "info",
        type: "0",
      },
      {
        name: "customer info",
        file: "info",
        type: "1",
      },
      {
        name: "smart lighting",
        children: [
          {
            name: "smart lighting",
            file: "main",
            type: "2",
          },
          {
            name: "standard discount",
            file: "child",
            type: "3",
          },
        ],
      },
      {
        name: "smart irrigation",
        children: [
          {
            name: "smart irrigation",
            file: "main",
            type: "4",
          },
          {
            name: "iot device",
            file: "child",
            type: "5",
          },
        ],
      },
    ],
  }),
  methods: {
    component(type) {
      switch (type) {
        case "0":
          this.selectedComponent = "CommercialInfo";
          break;
        case "1":
          this.selectedComponent = "CustomerInfo";
          break;
        case "2":
          this.selectedComponent = "SmartLighting";
          break;
        case "3":
          this.selectedComponent = "StandardDiscount";
          break;
        case "4":
          this.selectedComponent = "SmartIrrigation";
          break;
        case "5":
          this.selectedComponent = "IotDevice";
          break;
        default:
          break;
      }
    },
  },
};
</script>