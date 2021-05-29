Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

new Vue({
  el: '#app',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ],
    postFontSize: 1
  },
})