import BlogHeader from "../../components/Blog/BlogHeader/BlogHeader.js";
import BlogPreview from "../../components/Blog/BlogPreview/BlogPreview.js";
import FullArticle from "../../components/Blog/FullArticle/FullArticle.js";
import WriteBlog from "../../components/Blog/WriteBlog/WriteBlog.js";

const options = {
  data() {
    return {
      title: "hello there",
    };
  },
  methods: {},
  created() {},
};

const Blog = {
  ...options,
  template: `
    <div class="bl-root">
      <div class="bl-container">
        <blog-header>Recent Articles</blog-header>

        <main class="bl-main">
          <blog-preview v-for="i in 6" :key="i">
            <template #article-title>
              {{ title }}
            </template>
          </blog-preview>
        </main>
      </div>
    </div>
  `,
};

export default Vue.component("blog", Blog);
