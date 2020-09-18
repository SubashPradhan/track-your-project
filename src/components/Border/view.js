import React from 'react'
import BorderImg from '../../assets/images/header-bg.svg'
import '../../styles/border.css'

export const View = () => {
  return (
    <div className="home-heading-bg">
      <div>
        <img src={BorderImg} alt="Border" className="img-fluid border-img" />
      </div>
    </div>
  )
}
