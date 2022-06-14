const types = {
  authLogOut: "auth - logout",
  authLogIn: "auth - login",
  authPreferences: "auth - preferences",
};

const initialStore = {
  id: null,
  token: null,
  username: null,
  urlProfile: null,
  preferences: null,
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case types.authLogOut:
      return {
        user: initialStore,
      };

    case types.authLogIn:
      return {
        user: action.payload,
      };

    case types.authPreferences:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
};

export { initialStore, types };
