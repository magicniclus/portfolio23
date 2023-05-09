const initState = {
  loader: false,
  changePage: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_PAGE":
      return {
        ...state,
        changePage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
