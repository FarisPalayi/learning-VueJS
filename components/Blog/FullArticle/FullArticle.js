import { store } from "../../../store/Blog.js";

const options = {
  computed: {
    ...Vuex.mapState(["blogPosts"]),
    filteredBlogPost() {
      const currentPostId = Number(this.$route.params.id);
      return this.blogPosts.find((post) => post.id === currentPostId);
    },
  },
  methods: {
    ...Vuex.mapMutations(["setBlogPosts"]),
  },
  mounted() {
    const blogPostsFromLocalStorage = localStorage.getItem("blogPosts");
    if (blogPostsFromLocalStorage)
      this.setBlogPosts(JSON.parse(blogPostsFromLocalStorage));
  },
};

const FullArticle = {
  store,
  ...options,
  template: `
    <div class="bl-article-container">
      <article class="bl-article">
        <h1 class="bl-article-title bl-h1">{{ filteredBlogPost?.title }}</h1>
        <p class="bl-p">{{ filteredBlogPost?.article }}</p>
      </article>
      <router-link :to="{name: 'Blog'}" class="bl-go-back">Home</router-link>
    </div>
  `,
};

export default Vue.component("full-article", FullArticle);
