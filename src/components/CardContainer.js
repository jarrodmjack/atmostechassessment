import React from 'react'
import { API } from '../API'
import { useState, useEffect } from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom"

const CardContainer = ({ cards, setShowModal, setModalContent }) => {

    const homes = useSelector(state => state.homes)
    const lots = useSelector(state => state.lots)
    const location = useLocation()
    const [info, setInfo] = useState([]);
    const [showSaved, setShowSaved] = useState(false);
    console.log("saved?", showSaved)
    useEffect(() => {

        if (cards === 'homes') {
            setInfo(homes.content)
        } else if (cards === 'lots') {
            setInfo(lots.content)
        }
        if (showSaved) {
            setInfo(prev => prev.filter(item => item.isSaved))
        }
    }, [showSaved]);


    function handleClick() {
        setShowSaved(!showSaved)
    }

    return (
        
        <div className='cards-container'>
            <div className='saved-homes-button'>
                <a onClick={handleClick}>Show Saved Homes</a>
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