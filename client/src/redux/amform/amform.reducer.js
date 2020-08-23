const INITIAL_STATE = {
  //TODO check if there is any performace gain in splitting up the state object into individual components.
  amform: {
    fromToFocus: 0,
    travelType: 1,
    sugOptLen: 15,
    airDb: null,
    airports: null,
    input: {
      from: "",
      fromReady: false,
      to: "",
      toReady: false,
    },
  },
};

const amformReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_AMFORM_STATE":
      return {
        ...state,
        amform: action.payload,
      };
    default:
      return state;
  }
};

export default amformReducer;
