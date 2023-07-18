import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Weather Engine</h1>
        <p>
          <Search />
        </p>
      </header>
    </div>
  );
}

export default App;
