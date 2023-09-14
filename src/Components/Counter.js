import { useState } from "react";

export default function Counter(props) {
  // Creating An Instance Of State...
  // const countState = useState(0);
  // const count = countState[0];
  // const setCount = countState[1];
  const [count, setCount] = useState(0);
  // Using the:  Array destructuring syntax is cleaner...
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <span>
        Current Count:{" "}
        <span style={{ color: count < 0 ? "indianred" : "green" }}>
          {count}
        </span>
      </span>
      <section>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </section>
    </>
  );
}
