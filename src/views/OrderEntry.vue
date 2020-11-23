<template>
  <v-main style="background-color: #f5f5f5">
    <Header />
    <v-container>
      <v-card outlined class="my-13" style="background-color: #f5f5f5">
        <v-row class="pa-4" justify="space-between">
          <v-col cols="12" md="3">
            <v-treeview
              :active.sync="active"
              :items="items"
              :load-children="fetchUsers"
              :open.sync="open"
              activatable
              color="cyan lighten-2"
              open-on-click
              transition
            >
              <template class="d-none d-sm-flex" v-slot:prepend="{ item }">
                <v-icon class="mr-3" v-if="!item.children"> mdi-blur </v-icon>
              </template>
            </v-treeview>
          </v-col>

          <v-divider vertical></v-divider>

          <v-col cols="12" md="8" class="d-flex text-center">
            <v-scroll-y-transition mode="out-in">
              <div
                v-if="!selected"
                class="title grey--text text--lighten-1 font-weight-light"
                style="align-self: center"
              >
                Select an item !
              </div>
              <v-card
                v-else
                :key="selected.id"
                class="pt-6 mx-auto"
                flat
                max-width="400"
              >
                <v-card-text>
                  <v-avatar v-if="avatar" size="88">
                    <v-img
                      :src="`https://avataaars.io/${avatar}`"
                      class="mb-6"
                    ></v-img>
                  </v-avatar>
                  <h3 class="headline mb-2">
                    {{ selected.name }}
                  </h3>
                  <div class="blue--text mb-2">
                    {{ selected.email }}
                  </div>
                  <div class="blue--text subheading font-weight-bold">
                    {{ selected.username }}
                  </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-row class="text-left" tag="v-card-text">
                  <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                    Company:
                  </v-col>
                  <v-col>{{ selected.company.name }}</v-col>
                  <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                    Website:
                  </v-col>
                  <v-col>
                    <a :href="`//${selected.website}`" target="_blank">{{
                      selected.website
                    }}</a>
                  </v-col>
                  <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                    Phone:
                  </v-col>
                  <v-col>{{ selected.phone }}</v-col>
                </v-row>
              </v-card>
            </v-scroll-y-transition>
          </v-col>
        </v-row>
      </v-card>
      <v-bottom-navigation
        fixed
        horizontal
        background-color="#f5f5f5"
        :value="value"
        color="teal"
        grow
      >
        <v-btn>
          <span>Add items</span>
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>

        <v-btn>
          <span>Cancel Draft Order</span>
          <v-icon>mdi-close-box-outline</v-icon>
        </v-btn>

        <v-btn>
          <span>Tools</span>
          <v-icon>mdi-hammer-wrench</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-container>
  </v-main>
</template>

<script>
import Header from "@/components/common/Header";

const avatars = [
  "?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban",
  "?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun",
  "?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong",
  "?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair",
  "?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly",
];

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  components: {
    Header,
  },
  data: () => ({
    active: [],
    avatar: null,
    open: [],
    users: [],
    value: 1,
  }),

  computed: {
    items() {
      return [
        {
          id: 11,
          name: "Order Details",
          children: [
            { id: 12, name: "Commercial Info" },
            { id: 13, name: "Customer Info" },
          ],
        },
        {
          id: 14,
          name: "Discounts",
          children: this.users,
        },
        {
          id: 15,
          name: "Smart Cities",
          children: [
            { id: 16, name: "City - 1" },
            { id: 17, name: "City - 2" },
            { id: 18, name: "City - 3" },
          ],
        },
      ];
    },
    selected() {
      if (!this.active.length) return undefined;

      const id = this.active[0];

      return this.users.find((user) => user.id === id);
    },
  },

  watch: {
    selected: "randomAvatar",
  },

  methods: {
    async fetchUsers(item) {
      // Remove in 6 months and say
      // you've made optimizations! :)
      await pause(500);

      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => item.children.push(...json))
        .catch((err) => console.warn(err));
    },
    randomAvatar() {
      this.avatar = avatars[Math.floor(Math.random() * avatars.length)];
    },
  },
};
</script>