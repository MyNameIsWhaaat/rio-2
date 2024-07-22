import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar';
import Land from './components/Land/Land';
import Price from './components/Price/Price';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Land/>
      <Price/>
      <AboutUs/>
    </div>
  );
}

export default App;