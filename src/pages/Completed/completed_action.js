import actionTypes from "./completed_type";

export const setLoading = (payload) => {
  return {
    type: actionTypes.TODO_LOADING,
    payload: payload,
  };
};

export const setError = (payload) => {
  return {
    type: actionTypes.TODO_ERROR,
    payload: payload,
  };
};


export const setCompletedTodos = (payload) => {
  return {
    type: actionTypes.SET_COMPLETED_TODOS,
    payload: payload,
  };
};
export const getTodos = () => {
  return {
    type: actionTypes.GET_TODOS,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: payload,
  };
};


export const setMessage = (payload) => {
  return {
    type: actionTypes.SET_MESSAGE,
    payload: payload,
  };
};
export const setIncompleteTodosCount=(payload)=>{
  return{
    type:actionTypes.SET_INCOMPLETE_TODOS_COUNT,
    payload:payload
  }
}
export const setCompletedTodosCount=(payload)=>{
  return{
    type:actionTypes.SET_COMPLETED_TODOS_COUNT,
    payload:payload
  }
}