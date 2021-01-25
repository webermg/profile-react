import React from 'react'
import Bio from './Bio'
import Summary from './Summary'
import Contact from './Contact'
import { Row, Col, Accordion, Card } from 'react-bootstrap'
import { ChevronDoubleDown, ChevronDoubleUp } from 'react-bootstrap-icons'

export default function About() {
    const [contactExpanded, setContactExpanded] = React.useState(false)

    const handleClick=()=>{
        setContactExpanded(!contactExpanded);
    }

    return (
        <Row>
            
                <Col xs={12} className="bg-light rounded">
                    <Row>
                        <Col xs={12}>
                            <h1 className="py-3 border-bottom">About Me</h1>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="mt-2">
                            <Summary />
                        </Col>
                        <Col className="mt-2">
                            <Bio />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="mt-2">




                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" onClick={handleClick}>
                                        {contactExpanded ? <ChevronDoubleUp width={32} height={32}/> : <ChevronDoubleDown width={32} height={32}/>}
                                        &nbsp;&nbsp;Contact&nbsp;&nbsp;
                                        {contactExpanded ? <ChevronDoubleUp width={32} height={32}/> : <ChevronDoubleDown width={32} height={32}/>}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body><Contact /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Col>
            
        </Row>
    )
}
