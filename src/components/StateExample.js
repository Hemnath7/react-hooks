import { useState } from "react";

function StateExample() {
  const [text, setText] = useState("Hello");
  //   function handler() {
  //     setText("Welcome");
  //   }
  const handler = () => setText("Welcome");

  return (
    <>
      <h1>{text}</h1>
      <button onClick={handler}>change</button>
    </>
  );
}

export default StateExample;
