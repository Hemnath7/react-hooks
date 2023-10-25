import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
    // setCount(count++); when executing this line, count changes after double click only

  }

  function minus() {
    setCount(count - 1);
    // setCount(count--); when executing this line, count changes after double click only (pre/post increment)

  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>+ Add</button>
      <button onClick={minus}>- Minus</button>
    </>
  );
}

export default Counter;
