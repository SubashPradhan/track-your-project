import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import '../../styles/thankyouModal.css'
import ThankyouBackground from '../ThankyouBackgound'

export const View = (props) => {
  const { onClose } = props
  return (
    <Container className="modal-container">
      <Row>
        <Col lg={12}>
          <div className="modal-content text-center">
            <button onClick={onClose} className="close-button">
              <span>&times;</span>
            </button>
            <Fade top>
              <h3 className="modal-heading">Thank you for your message</h3>
            </Fade>
            <div className="border"></div>
            <div className="thankyou-img">
              <ThankyouBackground />
            </div>
            <p className="thankyou-text">We'll get back to you very soon.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
