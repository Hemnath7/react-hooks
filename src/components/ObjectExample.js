import { useState } from "react";

function ObjectExample() {
  const [detail, setDetail] = useState({
    fname: "Sam",
    lname: "Curran",
    age: 23,
  });

  function change() {
    setDetail({ ...detail, age: 29 }); //clarify this line with Imran
  }
  //   eg; const detail = { fname: "Sam",lname: "Curran",age: 29}
  return (
    <div>
      <h1>
        Hello {detail.fname} {detail.lname}, your age is {detail.age}
      </h1>
      <button onClick={change}>Change</button>
    </div>
  );
}

export default ObjectExample;
