import "./App.css";

function App() {
  let counter = 15;
  const addValue = () => {
    console.log('Clicked',Math.random());
    counter += 1;
    console.log(counter);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Increase value</button>
      <br />
      <button>Decrease value</button>
    </>
  );
}

export default App;
