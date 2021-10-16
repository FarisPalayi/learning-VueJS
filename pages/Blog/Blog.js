import BlogHeader from "../../components/Blog/BlogHeader/BlogHeader.js";
import BlogPreview from "../../components/Blog/BlogPreview/BlogPreview.js";
import FullArticle from "../../components/Blog/FullArticle/FullArticle.js";
import WriteBlog from "../../components/Blog/WriteBlog/WriteBlog.js";
import { store } from "../../store/Blog.js";

const options = {
  computed: {
    ...Vuex.mapState({
      blogPosts: "blogPosts",
    }),
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getData");
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
