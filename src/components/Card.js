import React, { useEffect, useRef } from 'react'
import Home from './Home'
import Lot from './Lot'
import { useState } from 'react'
import { API } from '../API'
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpen } from '../slices/modalSlice'
// import { addContent } from '../savedHomesSlice'
import { saveHome } from '../slices/homesSlice'
import { saveLot } from '../slices/lotsSlice'
import { useLocation } from 'react-router-dom';


const Card = ({ data, setShowModal, setModalContent }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const modal = useSelector(state => state.modal)
  const homes = useSelector(state => state.homes)
  const lots = useSelector(state => state.lots)
  const location = useLocation()
  // console.log(lots)
  // console.log(homes)
  function handleClick(e) {
    // ref.current.innerText = ref.current.innerText === `💙` ? `❤` : `💙`
    // ref.current.innerText = homes.content[+e.target.parentNode.getAttribute('cardid') - 1].isSaved ? `💙` : `❤`
    console.log(data.homePlanId || data.lotId)
    console.log({ cardTest: e.target.parentNode.getAttribute('cardid') })
    console.log("in handle click", location.pathname)

    if (location.pathname == '/homes' && !modal.open) { // TODO: fix logic
      dispatch(saveHome(data.homePlanId))
    } else {
      dispatch(saveLot(e.target.parentNode.getAttribute('cardid')))
    }
    e.stopPropagation()
  }



  function openModal(e) {

    console.log("open modal", e.target.parentNode.classList)
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
      <span className='save-homes-button' ref={ref} onClick={handleClick}>{(location.pathname === '/homes' ? homes : lots).content[(data.homePlanId || data.lotId) - 1].isSaved ? `💙` : `❤`}</span>
      <img className='card-image' src={data.image} />
      {data.acres ? <Lot data={data} /> : <Home data={data} />}
      <p>{data.description}</p>
    </div>
  )
}

export default Card