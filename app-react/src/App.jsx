// App.jsx
import './App.css';
import CounterComponent from './components/CounterComponent';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar /> 
      <h1 className='titulo'>Pistaccio Autoservicio</h1>
      <div className="main-content">
        <ItemListContainer className='greeting' greeting="¡Bienvenido a nuestra tienda en línea!" />
      </div>
      <div className="counter-container">
        <h2 className="items">ITEMS</h2>
        <CounterComponent />
      </div>
    </>
  );
}

export default App;
