export const store = new Vuex.Store({
  strict: true,

  state: {
    blogPosts: [],
  },

  mutations: {
    setBlogPosts(state, blogPosts) {
      state.blogPosts = blogPosts;
    },
    addNewArticle(state, newArticle) {
      state.blogPosts.push(newArticle);
    },
    log() {
      console.log("hello")
    }
  },
});
