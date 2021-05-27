let vm = new Vue({
  el: "#app",
  data: {
    submit: "Submit",
    firstName: "Peter",
    lastName: "Parker",
    fullName: "Peter Parker"
  },
  methods: {
    submitData: function () {
      this.submit = "Sumitted";
      this.style = "background-color: lime";
    },
  },
  computed: {
    get: function(){
        return this.firstName + " " + this.lastName;
    },
    set: function(value){
        let names = value.split(' ');
        let firstName = names[0];
        let lastName = names[names.length - 1];
    }
  },
});
