import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom"

const CardContainer = ({ cards, setModalContent }) => {

    const homes = useSelector(state => state.homes)
    const lots = useSelector(state => state.lots)
    const location = useLocation()
    const [info, setInfo] = useState([]);
    const [showSaved, setShowSaved] = useState(false);

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
                <button className='show-saved-button' onClick={handleClick}>Show Saved {location.pathname === "/homes" ? 'Homes' : 'Lots'}</button>
            </div>
            <div className='cards-wrapper'>
                {info.map(item => {
                    return <Card setModalContent={setModalContent} type={location.pathname === "/homes" ? "home" : "lot"} key={item.acres ? item.lotId : item.homePlanId} data={item} />
                })}
            </div>
        </div>
    )
}

export default CardContainer