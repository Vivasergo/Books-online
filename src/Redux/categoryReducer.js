const ADD_COMMENT = "ADD-COMMENT";
const HANDLE_COMMENT_CHANGE = "HANDLE-COMMENT-CHANGE";

const initialState = {
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
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      state.fiction.categoryComments.push({
        id: "11",
        text: action.commentText,
        time: "20:50, 12.10.2020",
      });
      state.fiction.commentFieldText = "";
      break;

    case HANDLE_COMMENT_CHANGE:
      let { value } = action.event.target;
      state.fiction.commentFieldText = value;
      break;

    default:
      return state;
  }
  return state;
};

export const addCommentCreator = (text) => {
  return {
    type: ADD_COMMENT,
    commentText: text,
  };
};

export const handleCommentChangeCreator = (e) => {
  return {
    type: HANDLE_COMMENT_CHANGE,
    event: e,
  };
};

export default categoryReducer;
