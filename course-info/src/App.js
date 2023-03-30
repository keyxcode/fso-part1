const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) => {
  const mappedParts = parts.map((part) => (
    <Part name={part.name} exercises={part.exercises} />
  ));
  return <div>{mappedParts}</div>;
};

const Total = ({ num }) => <p>Number of exercises {num}</p>;

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        num={course.parts.reduce(
          (prev, current) => prev + current.exercises,
          0
        )}
      />
    </div>
  );
};

export default App;
