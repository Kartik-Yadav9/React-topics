import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [counts, setCounts] = useState(0);
  return (
    <>
      <span>count: {counts}</span>
      <button
        style={{ margin: "50px 50px 50px 50px" }}
        onClick={() => setCounts(counts + 1)}
      >
        Click
      </button>

      <Child />
    </>
  );
}

export default Parent;
