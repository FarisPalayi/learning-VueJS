export const store = new Vuex.Store({
  strict: true,

  state: {
    blogPosts: [],
  },

  mutations: {
    addBlogPostsToState(state, blogPosts) {
      state.blogPosts = blogPosts;
    },
  },

  actions: {
    getData(context) {
      fetch("/pages/Blog/BlogData.json")
        .then((res) => res.json())
        .then((data) => context.commit("addBlogPostsToState", data))
        .catch((err) => console.log(err));
    },
  },
});
