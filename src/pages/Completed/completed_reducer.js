import actionTypes from "./completed_type";

const initState = {
  isLoading: false,
  error: "",
  completedTodos: [],
  message: "",
  incompleteTodosLength: 0,
  completedTodosLength: 0,
};
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TODO_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actionTypes.TODO_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    case actionTypes.SET_COMPLETED_TODOS:
      return {
        ...state,
        completedTodos: action.payload,
      };

    case actionTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case actionTypes.SET_INCOMPLETE_TODOS_COUNT:
      return {
        ...state,
        incompleteTodosLength: action.payload,
      };
    case actionTypes.SET_COMPLETED_TODOS_COUNT:
      return {
        ...state,
        completedTodosLength: action.payload,
      };

    default:
      return state;
  }
};
