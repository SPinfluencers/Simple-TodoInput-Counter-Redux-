import React from "react";
import { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccessful,
  postTodoFailure,
  postTodoRequest,
  postTodoSuccessful,
} from "../Redux/action";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, isError } = useSelector((state) => {
    return {
      todos: state.todos,
      isLoading: state.isLoading,
      isError: state.isError,
    };
  }, shallowEqual);
  const getTodos = () => {
    // Request
    dispatch(getTodosRequest());
    return axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        // Successful
        dispatch(getTodosSuccessful(res.data));
        console.log(res.data)
      })
      .catch((err) => {
        // Failure
        dispatch(getTodosFailure());
        console.log(err.message);
      });
  };
  const addTodo = (title) => {
    if (title) {
      const payload = {
        title,
        status: false,
      };
      dispatch(postTodoRequest());
      return axios
        .post("http://localhost:8080/todos", payload)
        .then((res) => {
          dispatch(postTodoSuccessful(res.data));
        })
        .catch((err) => {
          dispatch(postTodoFailure());
        });
    }
  };

  const handleAddTodo = (text) => {
    addTodo(text)
      .then(() => getTodos())
      .then(() => {
        console.log("Process complete");
      });
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log("Todos compoenent is rendering");
  return (
    <div>
      <h1>Todos</h1>
      <TodoInput handleAddTodo={handleAddTodo} />
      {todos.length > 0 &&
        todos.map((item) => {
          return (
            <div key={item.id}>
              {item.title}-{item.status ? "True" : "False"}
            </div>
          );
        })}
    </div>
  );
};

export default Todos;
