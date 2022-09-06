import './App.css';
import CardContainer from './components/CardContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';



function App() {

  const modal = useSelector(state => state.modal)
  const [modalContent, setModalContent] = useState([])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='cards-wrapper'>
          <Routes>
            <Route path='/homes' element={<CardContainer key="/homes" setModalContent={setModalContent} cards='homes' />} />
            <Route path='/lots' element={<CardContainer key="/lots" setModalContent={setModalContent} cards='lots' />} />
          </Routes>
        </div>
        {modal.open && <Modal modalContent={modalContent} />}
      </div>
    </Router>
  );
}

export default App;
