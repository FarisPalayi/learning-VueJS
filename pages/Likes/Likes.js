const options = {
  data() {
    return {
      likes: 0,
    };
  },
};

const Likes = {
  ...options,
  template: `
    <div class="lk-root">
      <div class="lk-container">
        <button @click="likes++" class="lk-like">👍</button>
        <button @click="likes--" class="lk-dislike" :disabled="likes < 1">👎</button>
        <span class="lk-like-count"> {{ likes }}</span>
      </div>
    </div>
  `,
};

export default Vue.component("likes", Likes);
