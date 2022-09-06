import React, { useRef } from 'react'
import Home from './Home'
import Lot from './Lot'
import { API } from '../API'
import { useSelector, useDispatch } from 'react-redux';

import { toggleOpen, updateHeading } from '../slices/modalSlice'
import { saveHome } from '../slices/homesSlice'
import { saveLot } from '../slices/lotsSlice'


const Card = ({ data, setShowModal, setModalContent, type }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const homes = useSelector(state => state.homes)
  const lots = useSelector(state => state.lots)



  function handleClick(e) {
    if (type === 'home') {
      dispatch(saveHome(data.homePlanId))
    } else if (type === 'lot') {
      dispatch(saveLot(data.lotId))
    }
    e.stopPropagation()
  }



  function openModal(e) {
    dispatch(updateHeading(data.name || `${data.address.split(', ')[0]}`))
    let propertyType;
    let node = e.target
    while (!node.getAttribute('cardid')) {
      node = node.parentNode
    }
    if (!node.parentNode.classList.contains("modal-card-container")) {
      dispatch(toggleOpen())
    }
    propertyType = node.getAttribute('type') === 'home' ? 'home' : 'lot'
    fetchCombinations(node.getAttribute('cardid'), propertyType)
  }


  function fetchCombinations(cardId, propertyType) {
    API.getCombinations()
      .then(res => {
        if (propertyType === 'home') {
          let allowedLotIds = res.reduce((lots, home) => {
            if (home.homePlanId == cardId) lots.push(home.lotId)
            return lots
          }, [])
          if (setModalContent) {
            setModalContent(allowedLotIds)
          }
        } else {
          let allowedHomeIds = res.reduce((homes, lot) => {
            if (lot.lotId == cardId) homes.push(lot.homePlanId)
            return homes
          }, [])
          if (setModalContent) {
            setModalContent(allowedHomeIds)
          }
        }
      })
  }


  return (
    <div type={data.acres ? 'lot' : 'home'} cardid={data.homePlanId || data.lotId} onClick={openModal} className='card'>
      <span
        className='save-homes-button'
        ref={ref}
        onClick={handleClick}>
        {(type === 'home' ? homes : lots).content[(data.homePlanId || data.lotId) - 1].isSaved ? `🧡` : `❤`}
      </span>
      <img
        alt='display card'
        className='card-image'
        src={data.image} />
      {data.acres ? <Lot data={data} /> : <Home data={data} />}
      <p>{data.description}</p>
    </div>
  )
}

export default Card