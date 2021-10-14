const BlogPreview = {
  template: `
    <article class="bl-article-preview">
      <router-link to="./article" class="bl-article-preview__link">
        <h2 class="bl-article-preview__title">Blog Title</h2>
        <p class="bl-article-preview__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptates nihil dolor dolorum corrupti cupiditate molestias 
          illo suscipit aliquid nesciunt praesentium?
        </p>
      </router-link>
    </article>
  `,
};

export default Vue.component("blog-preview", BlogPreview);
