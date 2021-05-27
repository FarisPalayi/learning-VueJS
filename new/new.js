new Vue({
  el: "#app",
  data: {
    submit: "Submit",
    style: null
  },
  methods: {
    submitData: function () {
      this.submit = "Sumitted";
      this.style = 'background-color: lime';
    },
  },
});
