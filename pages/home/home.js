const { data, methods } = {
  data() {
    return {
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
    };
  },
  methods: {
    randomPicker(array) {
      let randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    },
    add() {
      this.lists.push({
        item:
          this.randomPicker(this.nameArray) +
          " " +
          this.randomPicker(this.emojiArray),
      });
    },
    input() {
      this.lists.push({
        item: this.value + " " + this.randomPicker(this.emojiArray),
      });
      this.value = "";
    },
  },
};

const home = {
  data,
  methods,
  template: `
    <div>
      <header id="header">
        <h1 class="title" v-bind:title="title">{{ header1 }}</h1>
        <h2 class="title2">{{ header2 }}</h2>
        <div class="title3" v-if="show">{{ header3 }}</div>
      </header>
      <main id="main">
        <h4>{{ message }}</h4>
        <ul>
          <li v-for="list in lists">{{ list.item }}</li>
        </ul>
        <button v-on:click="add">{{ btnMessage }}</button>
        <input
          type="text"
          v-on:change="input"
          v-bind:placeholder="placeholder"
          v-model="value"
        />
      </main>
    </div>
  `,
};

export default Vue.component("home", home);
