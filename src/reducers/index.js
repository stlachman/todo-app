export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const ADD = "ADD";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        { item: action.payload, id: Date.now(), completed: false }
      ];
    default:
      return state;
  }
};
