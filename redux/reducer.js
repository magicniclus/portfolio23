const initState = {
  loader: false,
  changePage: false,
  firstView: true,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_PAGE":
      return {
        ...state,
        changePage: action.payload,
      };

    case "UPDATE_FIRST_VIEW":
      return {
        ...state,
        firstView: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
