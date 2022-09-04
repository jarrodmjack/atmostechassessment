import React, { useEffect } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Dummy from './components/Dummy';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';



function App() {



  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch()
  const [modalContent, setModalContent] = useState([])
  // const [showModal, setShowModal] = useState(false)
  // const [] = useState('')


  console.log({ modalContent })

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='cards-wrapper'>
          <Routes>
            <Route path='/homes' element={<CardContainer setModalContent={setModalContent} cards='homes' />} />
            <Route path='/lots' element={<CardContainer setModalContent={setModalContent} cards='lots' />} />
            {/* <Route path='/lots' element={<Dummy />} /> */}
          </Routes>
        </div>
        {modal.open && <Modal modalContent={modalContent} />}
        {/* {showModal && <Modal modalContent={modalContent} setShowModal={setShowModal} />} */}
      </div>
    </Router>
  );
}

export default App;
