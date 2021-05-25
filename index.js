let app = new Vue({
  // showing data
  el: "#app",
  data: {
    message: "First Vue Page🎉",
    title: "Hello this is a title", // v-bind
  },
});

let app2 = new Vue({
  el: "#app2",
  data: {
    message: "Hello I'm the item 2️⃣",
  },
});

let app3 = new Vue({
  el: "#app3",
  data: {
    message: "You've got fooled. There's nothing in here 😟",
    show: true, // showing element based on the condition
  },
});

let list = new Vue({
  el: "#list",
  data: {
    message: "Here's a list of items 🛒",
    btnMessage: "➕ Add random item",
    lists: [
      { item: "football ⚽" },
      { item: "cake 🍰" },
      { item: "ice cream 🍦" },
      { item: "fire 🔥" },
      { item: "laptop 💻" },
    ],
    placeholder: "Type a random name ⌨",
    value: '',
},
methods: {
    randomPicker: function (array) {
        let randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    },
    add: function () {
      let emojiArray = ['🍖','🍭','🚀','🌈','❄','🌟','🎊','🐠','🍕','🍁','🎨','🎁'];
      let nameArray = ["Food",'fish','confetti','baby','monitor','rainbow','paper','bluesky','pizza','gift','snow','paint','leaf','waterfall'];

      this.lists.push({ item: this.randomPicker(nameArray) + ' ' + this.randomPicker(emojiArray) });
    },
    input: function(){
        let emojiArray = ['🍖','🍭','🚀','🌈','❄','🌟','🎊','🐠','🍕','🍁','🎨','🎁'];
        this.lists.push({ item: this.value + ' ' + this.randomPicker(emojiArray) });
        this.value = '';
    }
  },
});