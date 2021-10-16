const options = {
  props: ["blogId"],
  mounted() {
    console.log(this.blogId);
  },
};

const BlogPreview = {
  ...options,
  template: `
    <article class="bl-article-preview">
      <router-link :to="\`article/\${blogId}\`" class="bl-article-preview__link">
        <h2 class="bl-article-preview__title">
          <slot name="article-title">Blog Title</slot>
        </h2>
        <p class="bl-article-preview__text">
          <slot name="article-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptates nihil dolor dolorum corrupti cupiditate molestias 
            illo suscipit aliquid nesciunt praesentium?
          </slot>
        </p>
      </router-link>
    </article>
  `,
};

export default Vue.component("blog-preview", BlogPreview);
