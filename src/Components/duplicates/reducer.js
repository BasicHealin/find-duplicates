export const initialState = {
  value: "",
  arr: [1, 4, 4, 9, 7, 6, 9, 16, 17, 9, 16, 62],
  inputError: false,
  current: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, value: action.payload };
    case "SET_ARR":
      return { ...state, arr: action.payload };
    case "SET_INPUT_ERROR":
      return { ...state, inputError: action.payload };
    case "SET_CURRENT":
      return { ...state, current: action.payload };
    default:
      return state;
  }
};
