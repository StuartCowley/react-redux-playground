import "./App.css";
import Counter from "./features/counter/Counter";
import RandomBeers from "./features/randomBeer/RandomBeers";

function App() {
  return (
    <div className="app">
      <h1>React redux playground</h1>
      <Counter />
      <RandomBeers />
    </div>
  );
}

export default App;
