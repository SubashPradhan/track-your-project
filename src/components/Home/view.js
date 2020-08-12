import React from 'react'
import '../../styles/home.css'
import Login from '../Login'
import Navbar from '../Navbar'
import ProjectImg from '../../assets/images/computer.jpg'
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
          </div>
          <ArrowDownwardIcon style={{fontSize:'5rem'}} className='down-arrow'/>
        </Col>
        <Col>
          Hello
            {/* <Login /> */}
        </Col>
      </Row>
    </Container>
  )
}
