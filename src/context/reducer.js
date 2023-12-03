export const initialState = {
    user: {
      email: "",
      role: "",
      id: "",
      name: "",
    },
    profile: {},
    isLogged: false,
    token: "",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "SET_LOGIN":
        return {
          ...state,
          isLogged: action.isLogged,
        };
      case "SET_PROFILE":
        return {
          ...state,
          profile: action.profile,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;