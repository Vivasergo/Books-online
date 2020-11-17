const ADD_COMMENT = "ADD-COMMENT";
const HANDLE_COMMENT_CHANGE = "HANDLE-COMMENT-CHANGE";

const initialState = {
  all: {
    items: [
      {
        id: "31",
        link: "/fiction/3",
        name: "The hare",
        imgLink: "/public-img/book1.jpg",
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
        id: "42",
        link: "/1298083324",
        name: "Amber eyes",
        imgLink: "/public-img/book2.jpg",
        is30off: false,
        comments: [],
      },
      {
        id: "53",
        link: "/1298083324",
        name: "Can love happen twice",
        imgLink: "/public-img/book3.jpg",
        is30off: false,
        comments: [],
      },
      {
        id: "64",
        link: "/1298083324",
        name: "Meluha",
        imgLink: "/public-img/book4.jpg",
        is30off: false,
        comments: [],
      },
      {
        id: "75",
        link: "/1298083324",
        name: "Meluha",
        imgLink: "/public-img/book5.jpg",
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
    title: "Fiction & literature",
    items: [
      {
        id: "3",
        link: "/fiction/3",
        name: "The hare",
        imgLink: "/public-img/book1.jpg",
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
        imgLink: "/public-img/book2.jpg",
        is30off: false,
        comments: [],
      },
      {
        id: "5",
        link: "/1298083324",
        name: "Can love happen twice",
        imgLink: "/public-img/book3.jpg",
        is30off: false,
        comments: [],
      },
      {
        id: "6",
        link: "/1298083324",
        name: "Meluha",
        imgLink: "/public-img/book4.jpg",
        is30off: false,
        comments: [],
      },
      {
        id: "7",
        link: "/1298083324",
        name: "Life is what you make it",
        imgLink: "/public-img/book5.jpg",
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
  children: {
    title: "Children",
    items: [
      
      {
        id: "555",
        link: "/1298083324",
        name: "Can love happen twice",
        imgLink: "/public-img/book3.jpg",
        is30off: false,
        comments: [],
      },
      {
        id: "666",
        link: "/1298083324",
        name: "Meluha",
        imgLink: "/public-img/book4.jpg",
        is30off: false,
        comments: [],
      },
      {
        id: "777",
        link: "/1298083324",
        name: "Life is what you make it",
        imgLink: "/public-img/book5.jpg",
        is30off: false,
        comments: [],
      },
      {
        id: "333",
        link: "/fiction/3",
        name: "The hare",
        imgLink: "/public-img/book1.jpg",
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
        id: "444",
        link: "/1298083324",
        name: "Amber eyes",
        imgLink: "/public-img/book2.jpg",
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
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      let newComment = {
        id: "11",
        text: action.commentText,
        time: "20:50, 12.10.2020",
      };

      // создаем и возвращаем измененную копию state,
      // копируя и изменяя, при надобности, вложенные объекты
      return {
        ...state,
        fiction: {
          ...state.fiction,
          categoryComments: [...state.fiction.categoryComments, newComment],
          commentFieldText: "",
        },
      };

    case HANDLE_COMMENT_CHANGE:
      return {
        ...state,
        fiction: { ...state.fiction, commentFieldText: action.newValue },
      };

    default:
      return state;
  }
};

export const addCommentCreator = (text) => {
  return {
    type: ADD_COMMENT,
    commentText: text,
  };
};

export const handleCommentChangeCreator = (value) => {
  return {
    type: HANDLE_COMMENT_CHANGE,
    newValue: value,
  };
};

export default categoryReducer;
