import React from 'react'
import '../../styles/downArrow.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export const View = (props) => {
  const {scrollDown} = props
  return (
    <div className="down-arrow">
      <ArrowDownwardIcon style={{ fontSize: '3.5rem' }} onClick={scrollDown} className='arrow' />
    </div>
  )
}
