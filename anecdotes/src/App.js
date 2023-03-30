import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const anecdotesLength = anecdotes.length;
  const anecdoteRatings = new Array(anecdotesLength).fill(0);

  const [selected, setSelected] = useState(0);
  const [ratings, setRatings] = useState(anecdoteRatings);

  const randomizeState = () => {
    const random = Math.floor(Math.random() * anecdotesLength);
    setSelected(random);
  };
  const increaseVote = (id) => {
    const copy = [...ratings];
    copy[id] += 1;
    setRatings(copy);
  };

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>has {ratings[selected]} votes</div>
      <Button handleClick={() => increaseVote(selected)} text="vote"></Button>
      <Button handleClick={randomizeState} text="next anecdote"></Button>
    </div>
  );
};

export default App;
