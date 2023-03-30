import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Stats = ({ statName, statNum }) => (
  <div>
    {statName} {statNum}
  </div>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => console.log("good")} text="good" />
      <Button handleClick={() => console.log("neutral")} text="neutral" />
      <Button handleClick={() => console.log("bad")} text="bad" />
      <h1>Statistics</h1>
      <Stats statName="good" statNum="0" />
      <Stats statName="neutral" statNum="0" />
      <Stats statName="bad" statNum="0" />
    </div>
  );
};

export default App;
