const BlogHeader = {
  template: `
    <div class="bl-header">
      <h1 class="bl-h1"><slot></slot></h1>
      <a href="./write.html" class="write">Write</a>
    </div>
  `,
};

export default Vue.component("blog-header", BlogHeader);
