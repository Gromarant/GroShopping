import '../styles/App.css';
import NavBar from './NavBar.jsx';
import { SearchBar } from './SearchBar';


function App() {
  return (
    <>
      <NavBar /> 
      <SearchBar placeholder={"Search what you want"} data={"API data"}/>
    </>
  );
}

export default App;
