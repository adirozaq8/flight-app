const INITIAL_STATE = {
  inputFocus: "none",
  travelType: 0,
  travelTypes: ["One way", "Return", "Multi-city"],
  initialFetch: false,
  sugListLen: 15,
  airDb: null,
  airports: null,
  templates: {
    cityInputs: {
      from: {
        title: "From",
        placeholder: "Origin",
        value: "",
        ready: false,
        iata: "",
        airport: "",
        country: "",
      },
      to: {
        title: "To",
        placeholder: "Destination",
        value: "",
        ready: false,
        iata: "",
        airport: "",
        country: "",
      },
    },
    iterables: ["ready", "value", "iata", "airport", "country"],
  },
  cityInputs: [],
  sugList: {
    selected: 0,
    iata: "",
    airport: "",
    country: "",
  },
};

const travelFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_TRAVELFORM":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default travelFormReducer;
