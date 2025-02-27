
import Navbar from './components/Navbar';
import Search from './components/Search';
import Products from './components/Product';
import About from './components/About';
import Footer from './components/Footer';
import "./App.css";



const App = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Products />
      <About />
      <Footer />
    </>
  );
};

export default App;
