const INITIAL_STATE = {
  fromToFocus: 0,
  travelType: 1,
  inpOptLen: 15,
  airDb: null,
  airports: null,
};

const amformReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_AMFORM_STATE":
      return {
        ...state,
        currentState: action.payload,
      };
    default:
      return state;
  }
};

export default amformReducer;
