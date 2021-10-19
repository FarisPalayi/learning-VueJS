import { store } from "../../store/Blog.js";

import BlogHeader from "../../components/Blog/BlogHeader/BlogHeader.js";
import BlogPreview from "../../components/Blog/BlogPreview/BlogPreview.js";
import FullArticle from "../../components/Blog/FullArticle/FullArticle.js";
import WriteBlog from "../../components/Blog/WriteBlog/WriteBlog.js";

const options = {
  computed: {
    ...Vuex.mapState(["blogPosts"]),
  },

  watch: {
    blogPosts() {
      localStorage.setItem("blogPosts", JSON.stringify(this.blogPosts));
    },
  },

  methods: {
    ...Vuex.mapMutations(["setBlogPosts", "addNewArticle"]),
    isNewUser() {
      if (localStorage.getItem("isNewUser") == null) return true;
      return false;
    },
  },

  mounted() {
    const addPredefinedDataToLSForANewUser = async () => {
      if (this.isNewUser()) {
        localStorage.setItem("isNewUser", "0");
        const { initialBlogData } = await import("./initialBlogData.js");
        localStorage.setItem("blogPosts", JSON.stringify(initialBlogData));
        return initialBlogData;
      }

      return Promise.resolve();
    }

    addPredefinedDataToLSForANewUser().then(() => {
      const blogPostsFromLocalStorage = JSON.parse(
        localStorage.getItem("blogPosts")
      );

      if (blogPostsFromLocalStorage)
        this.setBlogPosts(blogPostsFromLocalStorage);
    });
  },
};

const Blog = {
  store,
  ...options,
  template: `
    <div class="bl-root">
      <div class="bl-container" v-if="this.$router.history.current.path === '/blog'">
        <blog-header>Articles</blog-header>
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
      <router-view></router-view>
    </div>
  `,
};

export default Vue.component("blog", Blog);
