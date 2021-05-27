

let vm = new Vue({
    el: '#app',
    data: {
        likes: 0,
        color: 'color: currentColor'
    },
    methods: {
        giveColor: function() {
            if (this.likes > 0) this.color = 'color:#1cff00'
        }
    }
})