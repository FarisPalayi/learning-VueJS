let header = new Vue({
  el: "#header",
  data: {
    
  },
});

let main = new Vue({
  el: "#main",
  data: {
    header1: "First Vue Pageð",
    header2: "Hello I'm the item 2ï¸â£",
    header3: "Just some placeholder text ð",
    title: "Hello this is a title", // v-bind
    show: true,
    message: "Here's a list of items ð",
    btnMessage: "â Add random item",
    lists: [
      { item: "football â½" },
      { item: "cake ð°" },
      { item: "ice cream ð¦" },
      { item: "fire ð¥" },
      { item: "laptop ð»" },
    ],
    placeholder: "Type a random name â¨",
    value: "",
    emojiArray: [
      "ð",
      "ð­",
      "ð",
      "ð",
      "â",
      "ð",
      "ð",
      "ð ",
      "ð",
      "ð",
      "ð¨",
      "ð",
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
