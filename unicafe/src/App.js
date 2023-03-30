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

  const increaseGoodRating = () => setGood(good + 1);
  const increaseNeutralRating = () => setNeutral(neutral + 1);
  const increaseBadRating = () => setBad(bad + 1);
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={increaseGoodRating} text="good" />
      <Button handleClick={increaseNeutralRating} text="neutral" />
      <Button handleClick={increaseBadRating} text="bad" />
      <h1>Statistics</h1>
      <Stats statName="good" statNum={good} />
      <Stats statName="neutral" statNum={neutral} />
      <Stats statName="bad" statNum={bad} />
    </div>
  );
};

export default App;
