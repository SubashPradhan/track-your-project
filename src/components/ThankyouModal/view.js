import React from 'react'
import { Container } from 'react-bootstrap'
import '../../styles/thankyouModal.css'

export const View = (props) => {
  const { onClose } = props
  return (
    <Container className="modal-container" fluid>
      <h1>ThanK you for your message</h1>
      <button onClick={onClose}>close</button>
    </Container>
  )
}
