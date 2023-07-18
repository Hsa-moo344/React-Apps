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
        <a href="https://github.com/Hsa-moo344/React-Apps">
          Open Source by Hsa Moo Moo
        </a>
      </header>
    </div>
  );
}

export default App;
