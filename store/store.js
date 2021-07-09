const store = new Vuex.Store({
  state: {
    title: "This is the heading",
    query: "",
    words: [
      "You",
      "are",
      "running",
      "Vue",
      "in",
      "development",
      "mode",
      "Make",
      "sure",
      "to",
      "turn",
      "on",
      "production",
      "mode",
      "when",
      "deploying",
      "for",
      "production",
      "See",
      "more",
      "tips",
      "at",
      "search",
    ],
    searchedWordList: [],
  },
  mutations: {
    search(state, input) {
      state.query = input;

      const searchedWordListArr = state.words.filter((word) => {
        const formattedWord = word.toLowerCase().trim();
        if (formattedWord.indexOf(state.query) !== -1) return word;
      });

      state.searchedWordList = searchedWordListArr;
    },
  },
  getters: {},
});

new Vue({
  el: "#app",
  store,
  computed: {
    title() {
      return this.$store.state.title;
    },
    searchedWordList() {
      return this.$store.state.searchedWordList;
    },
    input() {
      return this.$store.state.query;
    },
  },
  mounted() {
    this.$store.commit("search", "");
  },
  methods: {
    search(e) {
      const formattedUserInput = e.target.value.toLowerCase().trim();
      this.$store.commit("search", formattedUserInput);
    },
  },
});
