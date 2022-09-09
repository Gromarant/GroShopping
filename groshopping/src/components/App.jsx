import '../styles/App.scss';
import NavBar from '../components/NavBar';
import { SearchBar } from '../components/SearchBar';
import { ProductCard } from './ProductCard';


function App() {
  return (
    <>
      <NavBar /> 
      <section className='mainContainer'>
        <SearchBar placeholder={"Search what you want"}/>
        <ProductCard />
        <ProductCard />
      </section>
    </>
  );
}

export default App;
