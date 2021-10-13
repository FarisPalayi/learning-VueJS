let header = new Vue({
  el: "#header",
  data: {
    
  },
});

let main = new Vue({
  el: "#main",
  data: {
    header1: "First Vue Page🎉",
    header2: "Hello I'm the item 2️⃣",
    header3: "Just some placeholder text 😃",
    title: "Hello this is a title", // v-bind
    show: true,
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
    value: "",
    emojiArray: [
      "🍖",
      "🍭",
      "🚀",
      "🌈",
      "❄",
      "🌟",
      "🎊",
      "🐠",
      "🍕",
      "🍁",
      "🎨",
      "🎁",
    ],
    nameArray: [
      "Food",
      "fish",
      "confetti",
      "baby",
      "monitor",
      "rainbow",
      "paper",
      "bluesky",
      "pizza",
      "gift",
      "snow",
      "paint",
      "leaf",
      "waterfall",
    ],
  },
  methods: {
    randomPicker: function (array) {
      let randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    },
    add: function () {
      this.lists.push({
        item:
          this.randomPicker(this.nameArray) +
          " " +
          this.randomPicker(this.emojiArray),
      });
    },
    input: function () {
      this.lists.push({
        item: this.value + " " + this.randomPicker(this.emojiArray),
      });
      this.value = "";
    },
  },
});

Vue.component("hyperlink", {
  template:
    '<a href="./Components/components.html" class="hyperlink">Components</a>',
});
let footer = new Vue({
  el: "#footer",
});
