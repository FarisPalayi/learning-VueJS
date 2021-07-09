const store = new Vuex.Store({
  strict: true,
  state: {
    title: "Search a word",
    query: "",
    words: [], // this will be populated when we get data
    searchedWordList: [], // this too
  },
  mutations: {
    search(state, obj) {
      state.query = obj.input;

      const searchedWordListArr = state.words.filter((word) => {
        const formattedWord = word.toLowerCase().trim();
        if (formattedWord.indexOf(state.query) !== -1) return word;
      });

      state.searchedWordList = searchedWordListArr;
    },
  },
  getters: {},
  actions: {
    getDataAndSearch(context, input) {
      fetch("./data.json")
        .then((res) => res.json())
        .then((data) => context.commit("search", { input, data }))
        .catch((err) => Error(err));
    },
  },
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
    // this.$store.commit("search", ""); // to add every word to searchedWordList
    this.$refs.search.focus();
  },
  methods: {
    search(e) {
      const formattedUserInput = e.target.value.toLowerCase().trim();
      this.$store.dispatch("getDataAndSearch", formattedUserInput);
    },
  },
});
