import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => console.log("good")} text="good" />
      <Button handleClick={() => console.log("neutral")} text="neutral" />
      <Button handleClick={() => console.log("bad")} text="bad" />
    </div>
  );
};

export default App;
