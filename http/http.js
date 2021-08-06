// Header

Vue.component("top-section", {
  template: `
    <div class="header">
      <h1>Recent Articles</h1>
      <button class="write">Write</button>
    </div>
  `
})

let header = new Vue({
  el: "#header"
})

// Main

Vue.component("blog-preview", {
  template: `
  <article class="article">
    <a href="">
      <h2 class="article__title">Blog Title</h2>
      <p class="article__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptates nihil dolor dolorum corrupti cupiditate molestias 
        illo suscipit aliquid nesciunt praesentium?
      </p>
    </a>
  </article>
  `
})

let vm = new Vue({
  el: "#app",
  data: {},
})

// Footer

Vue.component("hyper-link" ,{
  template: '<a href="../index.html" class="hyperlink">Home</a>'
})

let footer = new Vue({
  el: "#footer",
})

