import { store } from "../../../store/Blog.js";

const options = {
  data() {
    return {
      title: "",
      desc: "",
      article: "",
      isArticleCreated: false
    };
  },

  computed: {
    ...Vuex.mapState(["blogPosts"]),
  },

  methods: {
    ...Vuex.mapMutations(["setBlogPosts", "addNewArticle"]),

    createNewArticle() {
      const newId = this.getLastArticleId() + 1;
      const title = this.$refs["bl-write-title"].value;
      const desc = this.$refs["bl-write-desc"].value;
      const article = this.$refs["bl-write-article"].value;

      const newArticle = {
        id: newId,
        title,
        desc,
        article,
      };

      this.addNewArticle(newArticle);
      localStorage.setItem("blogPosts", JSON.stringify(this.blogPosts));
      this.isArticleCreated = true;

      this.redirectToBlog();
    },

    getLastArticleId() {
      const lastArticle = this.blogPosts[this.blogPosts.length - 1];
      console.log(this.blogPosts);
      return lastArticle.id;
    },

    redirectToBlog() {
      setTimeout(() => {
        this.$router.push({ name: "Blog" })
      }, 2000);
    }
  },

  mounted() {
    const blogPostsFromLocalStorage = localStorage.getItem("blogPosts");
    if (blogPostsFromLocalStorage) this.setBlogPosts(JSON.parse(blogPostsFromLocalStorage));
  },
};

const WriteBlog = {
  store,
  ...options,
  template: `
    <div class="bl-write-root">
      <form class="bl-write" @submit.prevent="createNewArticle">
        <h1 class="bl-write__title">Write a New Article</h1>

        <div class="bl-write__input-container">
          <label for="title" class="bl-write__title-label">Title</label>
          <input type="text" name="title" class="bl-write__title-input" placeholder="Add a title" id="title" ref="bl-write-title" required>
        </div>
        
        <div class="bl-write__input-container">
          <label for="description" class="bl-desc-label">Description</label>
          <textarea id="description" class="bl-write__desc-input" placeholder="Add description to show on preview" ref="bl-write-desc" required></textarea>
        </div>
        
        <div class="bl-write__input-container">
          <label for="article" class="bl-write__article-label">Article</label>
          <textarea id="article" class="bl-write__article-input" rows="10" placeholder="Write article" ref="bl-write-article" required></textarea>
        </div>

        <button class="bl-write__submit">Submit</button>
      </form>
      <div v-if="isArticleCreated" role="alert" class="bl-write__success">New article successfully created</div>
    </div>
  `,
};

export default Vue.component("write-blog", WriteBlog);
