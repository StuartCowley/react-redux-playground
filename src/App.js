import "./App.css";
import Counter from "./components/counter";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>React redux playground</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
