import React from "react";
import Component from "./component";

function App() {
  const hello = "hello world";
  let arr = [1, 2, 3, 4, 5];
  let obj = {
    id: 1,
    name: "name1",
    age: 23
  };
  let arrobj = [
    {
      id: 1,
      name: "name1",
      age: 23
    },
    {
      id: 2,
      name: "name2",
      age: 24
    },
    {
      id: 3,
      name: "name3",
      age: 25
    }
  ]
  return (
    <div>
      <Component
        a={hello}
        arr={arr}
        object={obj}
        arrobject={arrobj}
      />
    </div>
  );
}

export default App;
