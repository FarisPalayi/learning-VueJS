Vue.component('button-counter', {
  data: function() {
    return { count: 0 }
  },
  template: '<button @click="count++"> You clicked me {{ count }} times.</button>'
})

new Vue({ el: '#app'})