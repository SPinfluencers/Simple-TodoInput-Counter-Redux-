import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddObj, handleReduceObj } from "../Redux/action";

const Counter = () => {
  // const [update, setUpdate] = useState(0);
  // const { dispatch,subscribe } = store;
  // const { count } = store.getState();
  // const handleAdd = () => {
  //   dispatch({ type: "ADD", payload: 1 });
  // };
  // const handleReduce = () => {
  //   dispatch({ type: "REDUCE", payload: 1 });
  // };

  // subscribe(() => {
  //   console.log("Store inside redux has changed",store.getState());
  //   setUpdate((prev) => prev + 1);
  // });

  // useselector hook which is used to access the data inside the redux store
  // console.log(count);
  const count = useSelector((state) => {
    return state.count;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => dispatch(handleAddObj(3))}>Add</button>
      <button onClick={() => dispatch(handleReduceObj(2))}>Reduce</button>
    </div>
  );
};

export default Counter;
