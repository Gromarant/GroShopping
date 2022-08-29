import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="GroShopping">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        GroShopping
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create your shopping list
        </a>
      </header>
    </div>
  );
}

export default App;
