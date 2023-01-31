const stateReducer = function (state, action) {
  switch (action.type) {
    case "LOAD_CELEBRITIES":
      return [...action.payload];
    case "UPDATE_CELEBRITY":
      return state.map((data) => {
        if (data.id === action.payload.id) {
          return action.payload;
        } else {
          return data;
        }
      });
    case "DELETE_CELEBRITY":
      return state.filter((data) => data.id !== action.payload.id);
    default:
      return state;
  }
};

export default stateReducer;
