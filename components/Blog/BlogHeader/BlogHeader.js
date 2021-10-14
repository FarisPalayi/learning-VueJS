const BlogHeader = {
  template: `
    <div class="bl-header">
      <h1 class="bl-h1"><slot></slot></h1>
      <router-link to="/write" class="write">Write</router-link>
    </div>
  `,
};

export default Vue.component("blog-header", BlogHeader);
