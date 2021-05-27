new Vue({
  el: "#app",
  data: {
    submit: "submit",
  },
  methods: {
    submitData: function () {
      this.submit = "sumitted";
    },
  },
});
