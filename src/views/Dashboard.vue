<template>
  <v-container>
    <h1>Dashboard</h1>
    <!-- grid system -->
    <v-row>
      <v-col cols="8"></v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      multi-sort
      @click:row="selectRow"
    ></v-data-table>
    <!-- breakpoint returns boolean if the user's device matches specified screen size and adjusts UI accordingly! -->
    <v-snackbar v-model="snackbar" :left="$vuetify.breakpoint.lgAndUp">
      You have selected "{{ currentItem }}"
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-row id="more-info">
      <v-col>
        <h2>More Info:</h2>
        <p>Bacon ipsum dolor amet jerky meatball hamburger pastrami prosciutto. Pork chislic frankfurter flank bacon rump tongue. Jowl pancetta venison ribeye kevin meatball pork chop jerky beef ribs ball tip short loin turkey. Alcatra sausage brisket meatloaf. Corned beef chuck kevin shoulder frankfurter ham hock hamburger landjaeger short ribs strip steak brisket fatback salami boudin. Beef ribs pork chop tail, picanha rump chicken meatball pork loin shoulder fatback frankfurter andouille tenderloin ham hock brisket.</p>
        <p>
          Doner prosciutto jowl pork belly, biltong sausage tenderloin. Shank bacon pig jerky meatball venison hamburger beef ribs t-bone short loin ham hock porchetta pastrami turkey ribeye. Jerky leberkas bresaola alcatra corned beef porchetta brisket. Alcatra meatloaf pork chop, cupim flank spare ribs beef jerky porchetta kevin rump bacon.
          Ball tip swine chislic strip steak, tongue ham hock cow salami drumstick. Pork loin turkey buffalo hamburger boudin short loin tongue beef ribs. Pancetta fatback meatball venison swine chicken short ribs ribeye tongue. Cow rump pork chop doner meatloaf beef. Biltong brisket jowl sirloin, ham chislic pork chop picanha. Brisket frankfurter salami filet mignon alcatra chislic.
        </p>
        <p>Bacon ipsum dolor amet jerky meatball hamburger pastrami prosciutto. Pork chislic frankfurter flank bacon rump tongue. Jowl pancetta venison ribeye kevin meatball pork chop jerky beef ribs ball tip short loin turkey. Alcatra sausage brisket meatloaf. Corned beef chuck kevin shoulder frankfurter ham hock hamburger landjaeger short ribs strip steak brisket fatback salami boudin. Beef ribs pork chop tail, picanha rump chicken meatball pork loin shoulder fatback frankfurter andouille tenderloin ham hock brisket.</p>
        <!-- Use the intersect observer API -->
        <p v-intersect="showMoreContent">
          Doner prosciutto jowl pork belly, biltong sausage tenderloin. Shank bacon pig jerky meatball venison hamburger beef ribs t-bone short loin ham hock porchetta pastrami turkey ribeye. Jerky leberkas bresaola alcatra corned beef porchetta brisket. Alcatra meatloaf pork chop, cupim flank spare ribs beef jerky porchetta kevin rump bacon.
          Ball tip swine chislic strip steak, tongue ham hock cow salami drumstick. Pork loin turkey buffalo hamburger boudin short loin tongue beef ribs. Pancetta fatback meatball venison swine chicken short ribs ribeye tongue. Cow rump pork chop doner meatloaf beef. Biltong brisket jowl sirloin, ham chislic pork chop picanha. Brisket frankfurter salami filet mignon alcatra chislic.
        </p>
      </v-col>
    </v-row>

    <v-row id="below-the-fold" v-if="loadNewContent">
      <v-col>
        <h2>Dynamically Loaded Upon Intersection:</h2>
        <p>
          Short ribs cow bresaola, venison andouille strip steak tri-tip prosciutto. Landjaeger biltong picanha, spare ribs chislic tenderloin pancetta turkey. Tenderloin boudin chicken drumstick, tongue beef meatball tri-tip. Ham hock shank hamburger, short ribs turducken cupim alcatra cow capicola. Chicken drumstick frankfurter meatball meatloaf. Pork chop beef kevin shoulder tail tenderloin chicken bacon.
          Short loin cow biltong, pork chop swine meatloaf jowl ball tip beef prosciutto pastrami porchetta strip steak sausage ham. Swine spare ribs cow short loin. Pancetta beef kevin ribeye cow corned beef short loin drumstick jowl hamburger salami shankle porchetta prosciutto. Pork short ribs meatball flank landjaeger kevin bacon hamburger. Shankle burgdoggen drumstick salami. Tongue pork fatback frankfurter spare ribs filet mignon, rump boudin chislic kielbasa ham hock corned beef. Brisket salami leberkas, sausage landjaeger beef ribs chuck.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currentItem: "",
      snackbar: false,
      loadNewContent: false,
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  },
  methods: {
    selectRow(event) {
      this.snackbar = true;
      // In table docs, click:row event includes the item for the row, so we can access that "item" here as the dessert name clicked
      this.currentItem = event.name;
    },
    showMoreContent(entries) {
      // default JS intersect observer API, one of the args we receive is "entries", which contains an array of the different elements being observed.
      // console.log(entries[0].isIntersecting);
      this.loadNewContent = entries[0].isIntersecting;
    }
  }
};
</script>

<style lang="scss" scoped></style>
