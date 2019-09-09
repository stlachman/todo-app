export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    dueBy: new Date("September 08, 2019"),
    tag: "technical",
    id: 3892987589
  }
];

export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const CLEAR = "CLEAR";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          ...action.payload
        }
      ];
    case TOGGLE:
      return [
        ...state.map(item =>
          item.id === action.payload.id
            ? { ...item, completed: !item.completed }
            : item
        )
      ];
    case CLEAR:
      return [...state.filter(item => !item.completed)];
    default:
      return state;
  }
};
