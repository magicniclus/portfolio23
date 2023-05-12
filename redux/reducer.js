const initState = {
  loader: false,
  changePage: false,
  firstView: true,
  galerieParams: {
    clicked: null,
    urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 5, 7, 8, 2, 4, 9, 6].map(
      (u) => `/${u}.jpg`
    ),
  },
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
