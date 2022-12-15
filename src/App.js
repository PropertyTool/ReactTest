import Navbar from './Navbar';
import Home from './home';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Home />
      </div>

      <Footer />
    </div>
  );
}

export default App;
