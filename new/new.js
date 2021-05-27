
new Vue({
    el: '#app',
    data: {
        isDark: false,
        isLight: true,
    },
    computed: {
        classObj: function(){
            return {
                dark: this.isDark && !this.isLight,
                light: this.isLight && !this.isDark
            }
        }
    }
})