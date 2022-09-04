import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Card from './Card';
import { API } from '../API'
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpen } from '../modalSlice'

const Modal = ({ setShowModal, modalContent }) => {

    console.log({ modaljs: modalContent })
    const dispatch = useDispatch()
    const [content, setContent] = useState([])
    const location = useLocation()
    const modal = useSelector(state => state.modal)


    useEffect(() => {
        if (location.pathname == '/homes') {
            API.getLots()
                .then(res => {
                    console.log(res)
                    const validCombination = res.filter(item => modalContent.includes(item.lotId))
                    setContent(validCombination)
                })
        }
    }, [modalContent])


    function closeModal(e) {
            console.log(e.target)// if (e.target.classList.contains('modal-background')) setShowModal(false)

        if (e.target.classList.contains('modal-background')) {
            dispatch(toggleOpen())
        }
    }



    return (
        <div onClick={closeModal} className='modal-background'>
            <div className='modal'>

                <h2>Compatible BLANK plans</h2>
                <div className='modal-card-container'>
                    {content.map(item => {
                        return <Card key={item.acres ? item.lotId : item.homePlanId} data={item} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Modal