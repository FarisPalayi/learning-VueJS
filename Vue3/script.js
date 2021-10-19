const { createApp, ref, reactive, toRefs } = Vue;

createApp({
  setup() {
    const state = reactive({ count: 0 });
    const input = ref("");

    const increment = () => state.count++;

    return { increment, ...toRefs(state), input };
  },
}).mount("#app");
