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
    <div class="hm-home">
      <header class="hm-header">
        <h1 class="hm-h1" v-bind:title="title">{{ header1 }}</h1>
        <h2 class="hm-h2">{{ header2 }}</h2>
        <div class="hm-h3" v-if="show">{{ header3 }}</div>
      </header>
      <main>
        <h4 class="hm-h4">{{ message }}</h4>
        <ul class="hm-list">
          <li v-for="list in lists" class="hm-list__item">
            {{ list.item }}
          </li>
        </ul>
        <button v-on:click="add" class="hm-btn u-btn">
          {{ btnMessage }}
        </button>
        <input
          type="text"
          v-on:change="input"
          v-bind:placeholder="placeholder"
          v-model="value"
          class="u-input"
        />
      </main>
    </div>
  `,
};

export default Vue.component("home", home);
