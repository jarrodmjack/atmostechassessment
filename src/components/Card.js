import React, { useEffect, useRef } from 'react'
import Home from './Home'
import Lot from './Lot'
import { useState } from 'react'
import { API } from '../API'
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpen } from '../modalSlice'

const Card = ({ data, setShowModal, setModalContent }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const modal = useSelector(state => state.modal)


  function handleClick(e) {
    ref.current.innerText = ref.current.innerText === `💙` ? `❤` : `💙`
    e.stopPropagation()
  }



  function openModal(e) {
    // if (setShowModal) {
    // setShowModal(true)
    // }
    console.log("open modal", e.target.parentNode.classList)

    // console.log(e.target.getAttribute('cardid'))
    let node = e.target
    while (!node.getAttribute('cardid')) {
      node = node.parentNode
    }
    if (!node.parentNode.classList.contains("modal-card-container")) {
      dispatch(toggleOpen())
    }
    // const cardId = e.target.getAttribute('cardid')
    fetchCombinations(node.getAttribute('cardid'))

    // dispatch(toggleOpen)
  }




  function fetchCombinations(cardId) {
    console.log(cardId)
    API.getCombinations()
      .then(res => {
        let allowedLotIds = res.reduce((lots, home) => {
          if (home.homePlanId == cardId) lots.push(home.lotId)
          return lots
        }, [])
        if (setModalContent) {
          setModalContent(allowedLotIds)
        }
      })
  }


  return (

    <div cardid={data.homePlanId || data.lotId} onClick={openModal} className='card'>
      <span ref={ref} onClick={handleClick}>❤</span>
      <img className='card-image' src={data.image} />
      {data.acres ? <Lot data={data} /> : <Home data={data} />}
      <p>{data.description}</p>
    </div>
  )
}

export default Card