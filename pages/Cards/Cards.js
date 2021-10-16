const options = {
  data() {
    return {
      cardText: [
        { id: 0, text: "✨" },
        { id: 1, text: "🧲" },
        { id: 2, text: "🎄" },
        { id: 3, text: "🎈" },
        { id: 4, text: "🌼" },
        { id: 5, text: "🌈" },
        { id: 6, text: "🚀" },
        { id: 7, text: "🍕" },
      ],
    };
  },
};

const Card = {
  ...options,
  template: `
    <div class="cd-card-container">
      <card
        v-for="textObj in cardText"
        :card="textObj"
        :key="textObj.id"
        :data-value="textObj.text"
      ></card>
    </div>
  `,
};

export default Vue.component("home", Card);
