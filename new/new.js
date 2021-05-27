new Vue({
    el: '#app',
    data: {
        isDark: true,
        isLight: false,
    },
    methods: {
        toggleTheme: function(){
            this.isDark ? this.isDark = false: this.isDark = true;
            this.isLight ? this.isLight = false: this.isLight = true;
        }
    }
})