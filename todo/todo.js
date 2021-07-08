let vm = new Vue({
  el: "#app",
  data: {
    placeholder: "Add a todo ⌨",
    items: [
      { id: 0, text: "first todo item", isChecked: false },
      { id: 1, text: "second todo item", isChecked: false },
      { id: 2, text: "third todo item", isChecked: false },
    ],
    nextTodoId: 4,
    newTodoText: "",
    currentFocus: 0,
    tabindex: 0,
  },
  methods: {
    addItem() {
      if (this.newTodoText.trim() === "") return;
      this.items.push({ id: this.nextTodoId++, text: this.newTodoText, isChecked: false });
      this.newTodoText = "";
      this.addToLocalStorage();
    },
    tic(e) {
      const id = e.target.getAttribute('id');
      let currentItem = this.items[id]
      
      e.target.checked = !(currentItem.isChecked); // toggle check when press enter
      currentItem.isChecked = e.target.checked; // update state
      
      this.addToLocalStorage();
    },
    navigate(e) {
      e.target.focus();
    },
    up(e) {
      const totalNumberOfLists = this.items.length;
      if (e.key === 'ArrowUp') {
        this.currentFocus--
        if (this.currentFocus < 1) this.currentFocus = totalNumberOfLists
      }
      this.setFocus(e)
    },
    down(e) {
      const totalNumberOfLists = this.items.length;
      if (e.key === 'ArrowDown') {
        this.currentFocus++
        if (this.currentFocus > totalNumberOfLists) this.currentFocus = 1
      }
      this.setFocus(e)
    },
    setFocus(e) {
      const currentElement = e.target;

      let liElement;
      if (currentElement.tagName === 'LI')
        liElement = currentElement
      else
        liElement = currentElement.parentElement;

      const focusElm = liElement.parentElement.querySelector('li[tabindex="0"]')
      focusElm.focus();
    },
    addToLocalStorage() {
      localStorage.setItem('todoList', JSON.stringify(this.items));
    },
    deleteTodo(e) {
      const checkbox = e.target.parentElement.firstElementChild
      const id = checkbox.getAttribute('id');
      this.items.splice(id, 1);
      this.addToLocalStorage();
    }
  },
  mounted() {
    const todoListFromLocalStorage = localStorage.getItem('todoList');
    if (todoListFromLocalStorage) {
      try {
        this.items = JSON.parse(todoListFromLocalStorage)

      } catch (error) {
        console.error('Error parsing localStorage data')
        localStorage.clear();
        console.warn('%clocalStorage data is automatically cleared', 'color: lime; font-weight: bold');
      }
      const ol = this.$refs.ol;
      ol.firstElementChild.setAttribute('tabindex', '0')
      ol.firstElementChild.firstElementChild.setAttribute('tabindex', '0') // checkbox
      ol.firstElementChild.lastElementChild.setAttribute('tabindex', '0') // button
    }
  }
});

Vue.component('hyperlink', {
  template: '<a href="../index.html" class="hyperlink">home 🏠</a>'
})

let footer = new Vue({
  el: '#footer',
})