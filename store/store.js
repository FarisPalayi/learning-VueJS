const store = new Vuex.Store({
  strict: true,
  state: {
    title: "Search a word",
    query: "",
    words: [], // this will be populated when we get data/ on load
    searchedWordList: [], // this too
    noResult: false,
  },
  mutations: {
    search(state, query) {
      state.query = query;

      const searchedWordListArr = state.words.filter((word) => {
        const formattedWord = word.toLowerCase().trim();
        if (formattedWord.indexOf(state.query) !== -1) return word;
      });

      if (searchedWordListArr.length < 1) state.noResult = true;
      else state.noResult = false;

      state.searchedWordList = searchedWordListArr;
    },
    populateData(state, data) {
      state.words = state.searchedWordList = data;
    },
  },
  getters: {},
  actions: {
    populateData(context) {
      fetch("./data.json")
        .then((res) => res.json())
        .then((data) => context.commit("populateData", data))
        .catch((err) => Error(err));
    },
    search(context, query) {
      context.commit("search", query);
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
    noResult() {
      return this.$store.state.noResult;
    },
  },
  mounted() {
    this.$store.dispatch("populateData"); // to add every word to searchedWordList
    this.$refs.search.focus();
  },
  methods: {
    search(e) {
      const formattedUserInput = e.target.value.toLowerCase().trim();
      this.$store.dispatch("search", formattedUserInput);
    },
  },
});
