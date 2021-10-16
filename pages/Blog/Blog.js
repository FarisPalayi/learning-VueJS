import BlogHeader from "../../components/Blog/BlogHeader/BlogHeader.js";
import BlogPreview from "../../components/Blog/BlogPreview/BlogPreview.js";
import FullArticle from "../../components/Blog/FullArticle/FullArticle.js";
import WriteBlog from "../../components/Blog/WriteBlog/WriteBlog.js";
import { store } from "../../store/Blog.js";
import { initialBlogData } from "./initialBlogData.js";

const options = {
  data() {
    return {
      initialBlogData,
    };
  },

  computed: {
    ...Vuex.mapState({
      blogPosts: "blogPosts",
    }),
  },

  methods: {
    isNewUser() {
      if (this.getNewUserDataFromLS() == undefined) return true;
      return false;
    },

    addNewArticle(title, desc, article) {
      const newId = this.getLastArticleId() + 1;
      const newArticle = {
        id: newId,
        title,
        desc,
        article,
      };

      this.$store.commit("addNewArticle", newArticle);
      this.setBlogPostsDataToLS(this.blogPosts);
    },

    // utils - kinda
    getDataFromLocalStorage(name) {
      const data = localStorage.getItem(name);
      if (data) return data;
    },

    // LS means localStorage
    setBlogPostsDataToLS(data) {
      localStorage.setItem("blogPosts", JSON.stringify(data));
    },
    setNotANewUser() {
      localStorage.setItem("isNewUser", JSON.stringify("0"));
    },

    getBlogPostsDataFromLS() {
      return this.getDataFromLocalStorage("blogPost");
    },
    getNewUserDataFromLS() {
      return this.getDataFromLocalStorage("isNewUser");
    },

    getLastArticleId() {
      const lastArticle = this.blogPosts[this.blogPosts.length - 1];
      return lastArticle.id;
    },
  },

  mounted() {
    if (this.isNewUser()) {
      this.setNotANewUser();
      this.setBlogPostsDataToLS(this.initialBlogData);
    }

    this.$store.commit("setBlogPosts", this.initialBlogData);
  },
};

const Blog = {
  store,
  ...options,
  template: `
    <div class="bl-root">
      <div class="bl-container">
        <blog-header>Recent Articles</blog-header>

        <main class="bl-main">
          <blog-preview v-for="(blog, i) in blogPosts" :key="i" :blogId="blog.id">
            <template #article-title>
              {{ blog.title, blog.id }}
            </template>
            <template #article-desc>
              {{ blog.desc }}
            </template>
          </blog-preview>
        </main>
      </div>
    </div>
  `,
};

export default Vue.component("blog", Blog);
