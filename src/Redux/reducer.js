import { ADD, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESSFUL, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESSFUL, REDUCE } from "./actionTYpes"

const initialState={
  count:12,
  todos:[],
  isLoading:false,
  isError:false
}
const reducer = (oldState=initialState, action) => {
  const { type, payload } = action;
  // console.log("Inside Reducer.js",type,payload)
  switch (type) {
    case ADD :{
      let tempCount=oldState.count+payload>=100?100:oldState.count+payload
      return {...oldState, count:tempCount}
    }
    case REDUCE:{
      return {...oldState, count:oldState.count - payload}
    }
    case GET_TODOS_REQUEST:{
      return{...oldState,isLoading:true}
    }
    case GET_TODOS_SUCCESSFUL:{
      return {...oldState, isLoading:false, todos:payload}
    }
    case GET_TODOS_FAILURE:{
      return {...oldState,isError:true, isLoading:false, todos:[]}
    }
    case POST_TODO_REQUEST:{
      return{...oldState,isLoading:true}
    }
    case POST_TODO_SUCCESSFUL:{
      return {...oldState, isLoading:false, todos:payload}
    }
    case POST_TODO_FAILURE:{
      return {...oldState,isError:true, isLoading:false, todos:[]}
    }
    default:
      return oldState;
  }
};
export default reducer;
