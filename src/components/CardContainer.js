import React from 'react'
import { API } from '../API'
import { useState, useEffect } from 'react';
import Card from './Card';






const CardContainer = ({ cards, setShowModal, setModalContent }) => {


    const [info, setInfo] = useState([]);

    useEffect(() => {

        if (cards === 'homes') {
            API.getHomePlans()
                .then(res => {
                    setInfo(res)
                })
        } else if (cards === 'lots') {
            API.getLots()
                .then(res => {
                    setInfo(res)
                })
        }
    }, []);

    console.log(info)


    return (
        <div className='cards-container'>
            <div className='saved-homes-button'>
                <a href="/savedHomes">Show Saved Homes</a>
            </div>
            <div className='cards-wrapper'>
                {info.map(item => {
                    // return <Card setShowModal={setShowModal} setModalContent={setModalContent} key={item.acres ? item.lotId : item.homePlanId} data={item} /> // checking if acres exists. If it does, we are setting lot id as the key, otherwise we are setting the home id
                    return <Card setModalContent={setModalContent} key={item.acres ? item.lotId : item.homePlanId} data={item} /> // checking if acres exists. If it does, we are setting lot id as the key, otherwise we are setting the home id
                })}
            </div>
        </div>
    )
}

export default CardContainer