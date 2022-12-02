import {
  ADD,
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESSFUL,
  POST_TODO_FAILURE,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESSFUL,
  REDUCE,
} from "./actionTYpes";

export const handleAddObj = (payload) => {
  return {
    type: ADD,
    payload,
  };
};
export const handleReduceObj = (payload) => {
  return {
    type: REDUCE,
    payload,
  };
};

export const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
export const getTodosSuccessful = (payload) => {
  return {
    type: GET_TODOS_SUCCESSFUL,
    payload,
  };
};
export const getTodosFailure = () => {
  return {
    type: GET_TODOS_FAILURE,
  };
};

export const postTodoRequest = () => {
  return {
    type: POST_TODO_REQUEST,
  };
};
export const postTodoSuccessful = (payload) => {
  return {
    type: POST_TODO_SUCCESSFUL,
    payload,
  };
};
export const postTodoFailure = () => {
  return {
    type: POST_TODO_FAILURE,
  };
};
