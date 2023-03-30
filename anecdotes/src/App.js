import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Anecdote = ({ anecdotes, ratings, id }) => (
  <div>
    <div>{anecdotes[id]}</div>
    <div>has {ratings[id]} votes</div>
  </div>
);

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

  const maxVote = Math.max(...ratings);
  const idOfMaxVote = ratings.findIndex((vote) => vote === maxVote);

  const randomizeSelected = () => {
    while (true) {
      const random = Math.floor(Math.random() * anecdotesLength);
      if (random === selected) continue;

      return setSelected(random);
    }
  };
  const increaseVote = (id) => {
    const copy = [...ratings];
    copy[id] += 1;
    setRatings(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes} ratings={ratings} id={selected} />
      <Button handleClick={() => increaseVote(selected)} text="vote" />
      <Button handleClick={randomizeSelected} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={anecdotes} ratings={ratings} id={idOfMaxVote} />
    </div>
  );
};

export default App;
