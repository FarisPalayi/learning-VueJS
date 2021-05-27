Vue.component("card", {
    props: ["card"],
    template: "<div class='card'> {{ card.text }} </div>",
  });

  let app = new Vue({
    el: "#app",
    data: {
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
    },
  });

  Vue.component('hyperlink', {
    template: '<a href="../instance/instance.html" class="hyperlink">Instance</a>'
  })
  let footer = new Vue({
    el: '#footer',
  })