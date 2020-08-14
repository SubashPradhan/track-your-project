import React from 'react'
import '../../styles/home.css'
import Login from '../Login'
import Navbar from '../Navbar'
import ComputerIcon from '../../assets/images/Computer1.png'
import CoffeeIcon from '../../assets/images/Coffee1.png'
import GlassIcon from '../../assets/images/Glasses1.png'
import NewsPaperIcon from '../../assets/images/Newspaper1.png'
import GraphicIcon from '../../assets/images/Graphics1.png'
import { Container, Row, Col } from 'react-bootstrap'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function View(props) {
  const { menuClicked } = props
  return (
    <Container fluid className="home-container">
      <Navbar />
      <Row className={menuClicked ? "container-blur" : "blur-background"}>
        <Col className="header">
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
            <ArrowDownwardIcon style={{ fontSize: '3.5rem' }} className='down-arrow' />
          </div>
        </Col>
        <Col className="icons">
          <img src={GraphicIcon} alt="Graphic Icon" className="graphic-icon" />
          <img src={ComputerIcon} alt="Computer Icon" className="computer-icon" />
          <div className='left-icons'>
            <img src={NewsPaperIcon} alt="NewsPaper Icon" className="news-paper-icon " />
            <img src={GlassIcon} alt="Glass Icon" className="glass-icon" />
            <img src={CoffeeIcon} alt="Coffee Icon" className="coffee-icon" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
