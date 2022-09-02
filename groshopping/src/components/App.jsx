import '../styles/App.css';
import NavBar from '../components/NavBar';
import { SearchBar } from './SearchBar';


function App() {
  return (
    <>
      <NavBar /> 
      <SearchBar placeholder={"Search what you want"}/>
    </>
  );
}

export default App;
