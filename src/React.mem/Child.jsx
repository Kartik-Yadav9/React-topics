import React, { useRef } from "react";

function Child() {
  let increase = useRef(0);
  return (
    <div>
      Reactmemo counts dont change after using:{" "}
      <span style={{ fontWeight: "bold" }}>{increase.current++}</span> times{" "}
    </div>
  );
}

export default React.memo(Child);
