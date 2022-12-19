import Navbar from "./Navbar";
import Home from "./home";
import Footer from "./Footer";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Navbar />

      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Modal
      </button>

      {openModal && <Modal closeModal={setOpenModal} />}

      <div className="content">
        <Home />
      </div>

      <Footer />
    </div>
  );
}

export default App;
