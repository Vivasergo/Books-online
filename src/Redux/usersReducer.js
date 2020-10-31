
const FOLLOW_TRIGGER = "FOLLOW-TRIGGER";
const SET_USERS = "SET-USERS";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

// let testState;

// let ajaxResponse = (response) => testState = response;

const initialState = {
  items: [],
  currentPage: 1,
  countItems: 50,
  totalPages:"",
  isLoading: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_TRIGGER:
      return {
        ...state,
        items: state.items.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: !user.followed,
            };
          } else {
            return user;
          }
        }),
      };

    case SET_USERS:
      return {
        ...state,
        items: [...action.items],
      };

      case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };

      case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.totalPages
      };
      
      case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    default:
      return state;
  }
};



export const followTrigger = (id) => {
  return {
    type: FOLLOW_TRIGGER,
    userId: id,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    items: users,
  };
};

export const setCurrentPage =(currentPage)=>{
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  }
};

export const setTotalPages =(totalPages)=>{
  return {
    type: SET_TOTAL_PAGES,
    totalPages: totalPages,
  }
};

export const toggleIsLoading =(isLoading)=>{
  return {
    type: TOGGLE_IS_LOADING,
    isLoading: isLoading,
  }
};

export default usersReducer;
