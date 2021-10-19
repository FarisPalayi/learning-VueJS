const { createApp, ref } = Vue;

const obj = {
  setup() {
    const count = ref(0);

    const increment = () => count.value++;

    return { increment, count };
  },
};

createApp(obj).mount("#app");
