let vm = new Vue({
  el: "#app",
  data: {
    submit: "Submit",
    style: null,
    message: "How are things going?",
  },
  methods: {
    submitData: function () {
      this.submit = "Sumitted";
      this.style = "background-color: lime";
    },
  },
  computed: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
});
