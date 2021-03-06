import { store } from "../../store/Search.js";

const options = {
  computed: {
    ...Vuex.mapState({
      title: "title",
      searchedWordList: "searchedWordList",
      input: "query",
      noResult: "noResult",
    }),
  },
  mounted() {
    this.$store.dispatch("getData"); // to add every word to searchedWordList
    this.$refs.search.focus();
  },
  methods: {
    search(e) {
      const formattedUserInput = e.target.value.toLowerCase().trim();
      this.$store.dispatch("search", formattedUserInput);
    },
  },
};

const Search = {
  store,
  ...options,
  template: `
    <div class="se-root">
      <header class="se-header">
        <h1 class="se-title">{{ title }}</h1>
      </header>
      <main class="se-main">
        <div class="se-search-container">
          <input
            type="search"
            name="search"
            @input="search"
            v-model="input"
            class="se-search-input"
            placeholder="type a word..."
            ref="search"
            list="list"
            size="36"
            results="4"
            autocomplete="off"
          />
          <datalist id="list">
            <optgroup>
              <option v-for="(word, i) in searchedWordList" :value="word" v-if="i < 4" >
                {{ word }}
              </option>
            </optgroup>
          </datalist>
        </div>
        <div class="se-cards">
          <button v-for="word in searchedWordList">{{ word }}</button>
          <div v-if="noResult">No result found😥</div>
        </div>
      </main>
    </div>
  `,
};

export default Vue.component("search", Search);
