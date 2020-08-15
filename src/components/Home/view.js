import React from 'react'
import '../../styles/home.css'
import Navbar from '../Navbar'
import ComputerIcon from '../../assets/images/Computer1.png'
import CoffeeIcon from '../../assets/images/Coffee1.png'
import GlassIcon from '../../assets/images/Glasses1.png'
import NewsPaperIcon from '../../assets/images/Newspaper1.png'
import PhoneIcon from '../../assets/images/Phone1.png'
import TimeIcon from '../../assets/images/Project1.png'
import { Container, Row, Col } from 'react-bootstrap'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function View(props) {
  const { menuClicked } = props
  return (
    <Container fluid className="home-container">
      <Navbar />
      <Row className={menuClicked ? "container-blur" : "blur-background"}>
        <Col className="header" lg={6}>
          <h1>Manage Your Projects</h1>
          <div className="introduction">
            <p className='text-left'>
              Are you a freelancer ?
            </p>
            <p className='text-left'>
              Looking to track your time ?
            </p>
            <p className='text-left'>
              Looking to track all the hard works you did ?
            </p>
            <p className='text-left'>
              Then you are at the right place. We make it easy for you to track all your hard works
              and make sure that you don't miss a penny.
            </p>
            <p className='text-left'>
              Want to know more about us keep scrolling...
            </p>
          </div>
            <ArrowDownwardIcon style={{ fontSize: '3.5rem' }} className='down-arrow' />
        </Col>
        <Col className="icons" xs lg={6}>
            <img src={PhoneIcon} alt="Phone Icon" className="phone-icon"/>
            <img src={TimeIcon} alt="Time Icon" className="time-icon" />
            <img src={GlassIcon} alt="Glass Icon" className="glass-icon" />
            <img src={CoffeeIcon} alt="Coffee Icon" className="coffee-icon" />
            <img src={NewsPaperIcon} alt="NewsPaper Icon" className="news-paper-icon " />
            <img src={ComputerIcon} alt="Computer Icon" className="computer-icon" />
        </Col>
      </Row>
    </Container>
  )
}
