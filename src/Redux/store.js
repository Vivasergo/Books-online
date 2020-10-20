import renderEntireTree from "../index";
import categoryReducer from "./categoryReducer";
import contactReducer from "./chatReducer";

let store = {
  _state: {
    categories: {
      all: {
        items: [
          {
            id: "1",
            link: "/123",
            name: "The war of art",
            imgLink: "/wrwrerw.jpg",
            is30off: true,
            comments: [],
          },
          {
            id: "2",
            link: "/123324",
            name: "The war of artists",
            imgLink: "/wrwsdfsrerw.jpg",
            is30off: false,
            comments: [],
          },
        ],
        categoryComments: [
          {
            id: "10",
            text: "Good site!",
            time: "19:50, 12.10.2020",
          },
        ],
      },
      fiction: {
        items: [
          {
            id: "3",
            link: "/fiction/3",
            name: "The hare",
            imgLink: "/Images/book1.jpg",
            is30off: true,
            comments: [
              {
                name: "Alex",
                comment: "Good book!",
                time: "19:50, 12.10.2020",
              },
            ],
          },
          {
            id: "4",
            link: "/1298083324",
            name: "Amber eyes",
            imgLink: "/Images/book2.jpg",
            is30off: false,
            comments: [],
          },
        ],

        commentFieldText: "",

        categoryComments: [
          {
            id: "10",
            text: "Good site!",
            time: "19:50, 12.10.2020",
          },
        ],
      },
    },
    chat: {},
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.categories = categoryReducer(this._state.categories, action);
    this._state.chat = contactReducer(this._state.chat, action);
    renderEntireTree();
  },
};

window.store = store;

export default store;
