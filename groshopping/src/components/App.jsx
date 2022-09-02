import '../styles/App.css';
import NavBar from './NavBar.jsx';
import { SearchBar } from './SearchBar';
import BookData from './data/Data.json'

function App() {
  return (
    <>
      <NavBar /> 
      <SearchBar placeholder={"Search what you want"} data={BookData}/>
    </>
  );
}

export default App;
