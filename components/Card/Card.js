const options = {
  props: {
    card: {
      type: Object,
    },
  },
};

const Card = {
  ...options,
  template: `<div class='cd-card'> {{ card.text }} </div>`,
};

export default Vue.component("card", Card);
