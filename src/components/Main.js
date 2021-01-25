import React from 'react'
import Portfolio from './Portfolio'
import About from './About'
import {Container,Row} from 'react-bootstrap'

export default function Main() {
return (
    <Container className="mt-3">
      <About/>
      <Row className="my-3"></Row>
      <Portfolio/>
    </Container>
  )
}
