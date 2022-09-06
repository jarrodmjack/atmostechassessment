import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpen } from '../slices/modalSlice'



const Modal = ({ setShowModal, modalContent }) => {

    const dispatch = useDispatch()
    const [content, setContent] = useState([])
    const location = useLocation()
    const homes = useSelector(state => state.homes)
    const lots = useSelector(state => state.lots)
    const modal = useSelector(state => state.modal)


    useEffect(() => {
        if (location.pathname == '/homes') {
            let validCombination = lots.content.filter(item => modalContent.includes(item.lotId))
            setContent(validCombination)
 
        }else{
            let validCombination = homes.content.filter(item => modalContent.includes(item.homePlanId))
            setContent(validCombination)

        }

    
    }, [modalContent])


    function closeModal(e) {
        if (e.target.classList.contains('modal-background')) {
            dispatch(toggleOpen())
        }
    }



    return (
        <div onClick={closeModal} className='modal-background'>

            <div className='modal'>
                <h2>{modal.heading}</h2>
                <h2>Compatible {location.pathname === '/homes' ? 'Lots' : 'Home Plans'}</h2>
                <div className='modal-card-container'>
                    {content.map(item => {
                        return <Card key={item.acres ? item.lotId : item.homePlanId} type={location.pathname === "/homes" ? "lot" : "home"} data={item} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Modal