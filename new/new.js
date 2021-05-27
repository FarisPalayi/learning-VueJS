
new Vue({
    el: '#app',
    data: {
        classObj :{ dark: false, light: true },
    },
    methods: {
        toggleTheme: function(){
            this.classObj.dark ? this.classObj.dark = false: this.classObj.dark = true;
            this.classObj.light ? this.classObj.light = false: this.classObj.light = true;
        }
    }
})