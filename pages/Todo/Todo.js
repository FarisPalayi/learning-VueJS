const { data, methods, mounted } = {
  data() {
    return {
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
    }
  },
  methods: {
    addItem() {
      if (this.newTodoText.trim() === "") return;
      this.items.push({
        id: this.nextTodoId++,
        text: this.newTodoText,
        isChecked: false,
      });
      this.newTodoText = "";
      this.addToLocalStorage();
    },
    tic(e) {
      const id = e.target.getAttribute("id");
      let currentItem = this.items[id];

      e.target.checked = !currentItem.isChecked; // toggle check when press enter
      currentItem.isChecked = e.target.checked; // update state

      this.addToLocalStorage();
    },
    navigate(e) {
      e.target.focus();
    },
    up(e) {
      const totalNumberOfLists = this.items.length;
      if (e.key === "ArrowUp") {
        this.currentFocus--;
        if (this.currentFocus < 1) this.currentFocus = totalNumberOfLists;
      }
      this.setFocus(e);
    },
    down(e) {
      const totalNumberOfLists = this.items.length;
      if (e.key === "ArrowDown") {
        this.currentFocus++;
        if (this.currentFocus > totalNumberOfLists) this.currentFocus = 1;
      }
      this.setFocus(e);
    },
    setFocus(e) {
      const currentElement = e.target;

      let liElement;
      if (currentElement.tagName === "LI") liElement = currentElement;
      else liElement = currentElement.parentElement;

      const focusElm =
        liElement.parentElement.querySelector('li[tabindex="0"]');
      focusElm.focus();
    },
    addToLocalStorage() {
      localStorage.setItem("todoList", JSON.stringify(this.items));
    },
    deleteTodo(e) {
      const checkbox = e.target.parentElement.firstElementChild;
      const id = checkbox.getAttribute("id");
      this.items.splice(id, 1);
      this.addToLocalStorage();
    },
  },
  mounted() {
    const todoListFromLocalStorage = localStorage.getItem("todoList");
    if (todoListFromLocalStorage) {
      try {
        const parsedData = JSON.parse(todoListFromLocalStorage);
        this.items = parsedData;
        if (typeof parsedData !== "object") throw new Error("invalid type");
        if (parsedData.length < 1) throw new Error("empty");
        for (i in parsedData) {
          if (!parsedData[i].hasOwnProperty("id")) throw new Error("not valid");
          if (!parsedData[i].hasOwnProperty("text"))
            throw new Error("not valid");
          if (!parsedData[i].hasOwnProperty("isChecked"))
            throw new Error("not valid");
        }
      } catch (error) {
        console.error("Error parsing localStorage data");
        localStorage.clear();
        console.warn(
          "%clocalStorage data has been automatically cleared",
          "color: lime; font-weight: bold"
        );
        console.error(error);
      }
      const ol = this.$refs.ol;
      const li = ol.firstElementChild;
      li.setAttribute("tabindex", "0"); // li
      li.firstElementChild.setAttribute("tabindex", "0"); // checkbox
      li.lastElementChild.setAttribute("tabindex", "0"); // button
    }
  },
};

const ComponentName = {
  data,
  methods,
  mounted,
  template: `
    <div class="td-todo-container">
      <div class="td-h1-title-wrapper">
        <h1 class="td-h1">Todo App</h1>
      </div>

      <div class="td-add">
        <input
          type="text"
          v-model="newTodoText"
          @keydown.enter="addItem"
          :placeholder="placeholder"
          class="u-input"
        />
        <button class="u-btn-md" @click="addItem">Add</button>
      </div>

      <ol ref="ol" class="td-todo-container">
        <li
          v-for="(item, i) in items"
          @keydown.up="up"
          @keydown.down="down"
          :tabindex="(currentFocus === i+1) ? 0: -1"
          :class="{'active-item': currentFocus === i+1}"
          class="td-todo"
        >
          <input
            type="checkbox"
            @keydown.enter="tic"
            @change="tic"
            :id="[i]"
            :checked="item.isChecked"
            :tabindex="(currentFocus === i+1) ? 0: -1"
            class="td-todo__checkbox"
          />
          <label :for="[i]" class="td-todo__label">
            <span class="td-todo__text">{{ item.text }}</span>
          </label>
          <button
            @click="deleteTodo"
            class="td-todo__remove u-btn-sm-rd"
            :tabindex="(currentFocus === i+1) ? 0: -1"
          >
            remove
          </button>
        </li>
      </ol>
    </div>
  `,
};

export default Vue.component("component-name", ComponentName);
