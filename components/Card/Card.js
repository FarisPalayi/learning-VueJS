const { props } = {
  props: {
    card: {
      type: Object,
    },
  },
};

const Card = {
  props,
  template: `<div class='cd-card'> {{ card.text }} </div>`,
};

export default Vue.component("card", Card);
