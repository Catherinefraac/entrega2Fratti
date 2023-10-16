import './App.css'; 
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return ( 
  <>
  <NavBar />
  <ItemListContainer texto='TIENDA'/>
  <ItemDetailContainer/>
  </>

  );
}

export default App;
