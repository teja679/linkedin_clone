import React from 'react'
import './styles.css'

const HeaderOption = ({ Icon, title }) => {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption_icon' />}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
