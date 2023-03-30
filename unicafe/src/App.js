import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticsLine = ({ statName, statNum }) => (
  <div>
    {statName} {statNum}
  </div>
);

const Statistics = ({ good, neutral, bad }) => {
  const totalRatings = good + neutral + bad;
  const avgRating = (good * 1 + neutral * 0 + bad * -1) / totalRatings;
  const positivePercentage = `${(good / totalRatings) * 100} %`;

  if (totalRatings === 0) return <div>No feedback given</div>;

  return (
    <div>
      <StatisticsLine statName="good" statNum={good} />
      <StatisticsLine statName="neutral" statNum={neutral} />
      <StatisticsLine statName="bad" statNum={bad} />
      <StatisticsLine statName="all" statNum={totalRatings} />
      <StatisticsLine statName="average" statNum={avgRating} />
      <StatisticsLine statName="positive" statNum={positivePercentage} />
    </div>
  );
};

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
