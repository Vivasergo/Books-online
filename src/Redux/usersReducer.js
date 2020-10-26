const FOLLOW_TRIGGER = "FOLLOW-TRIGGER";

const initialState = {
  items: [
    {
      id: "1",
      firstName: "Dima",
      lastName: "Ivanov",
      avatarURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnlwn0zWYxGemFG6uiE_I2Huf0014n2VNvWg&usqp=CAU",
      followed: false,
      status: "Hi, everyone",
      location: {
        country: "Ukraine",
        city: "Kiev",
      },
    },
    {
      id: "2",
      firstName: "Sergey",
      lastName: "Vas",
      avatarURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnlwn0zWYxGemFG6uiE_I2Huf0014n2VNvWg&usqp=CAU",
        followed: true,
      status: "Hi, friends",
      location: {
        country: "Poland",
        city: "Torun",
      },
    },
    {
      id: "3",
      firstName: "Andrzej",
      lastName: "Stepanov",
      avatarURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnlwn0zWYxGemFG6uiE_I2Huf0014n2VNvWg&usqp=CAU",
        followed: false,
      status: "Good afternoon",
      location: {
        country: "Ukraine",
        city: "Kryvyi Rih",
      },
    },
    {
      id: "4",
      firstName: "Sasha",
      lastName: "Black",
      avatarURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnlwn0zWYxGemFG6uiE_I2Huf0014n2VNvWg&usqp=CAU",
        followed: true,
      status: "Hej, bro",
      location: {
        country: "Spain",
        city: "Madrid",
      },
    },
  ],
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
              followed: !user.followed
            }
          }
          else{
            return user
          }
        }),
      };

    default:
      return state;
  }
};

export const followTriggerAC = (id) => {
  return {
    type: FOLLOW_TRIGGER,
    userId: id,
  };
};

export default usersReducer;
