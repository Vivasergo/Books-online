const { default: Axios } = require("axios");

const instance = Axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "16bdc2c1-972d-4e2a-bc0d-2079b8c82fbf",
  },
});

export const usersAPI = {
  getUsers(countItems = 50, page = 1) {
    return instance
      .get(`users?count=${countItems}&page=${page}`)
      .then((response) => response.data);
  },
};

export const followAPI = {
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
};
