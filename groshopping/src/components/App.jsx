import '../styles/App.scss';
import NavBar from '../components/NavBar';
import { SearchBar } from '../components/SearchBar';
import { Button, ButtonIcon } from '../components/Buttons'


function App() {
  return (
    <>
      <NavBar /> 
      <SearchBar placeholder={"Search what you want"}/>
      <Button className={'primary-button'} type={'button'} value={'Add to list'}/>
    </>
  );
}

export default App;
