import React from 'react'
import { Col, Row } from 'react-bootstrap'

const skills = ['Java','Bootstrap','JavaScript','Engineering','Object-Oriented Programming','Agile Methodologies','Testing','Computer-Aided Design (CAD)','Requirements Gathering','Programming','Software Development','Requirements Analysis','Object Oriented Design','Analytical Skills','Data Structures','Web Development','Front-end Development','Data Analysis','Algorithms','HTML','CSS','Node.js','AJAX','Mongoose ODM','React.js','MySQL','MongoDB','C++','Visual Studio','VBA','.NET Framework','VB.NET','Microsoft Excel','Visio','Sequelize.js','SQL','NoSQL','Easily Adaptable','Problem Solving','Collaborative Problem Solving','Express.js','Event Driven Programming','Full-Stack Development','Model-View-Controller']
const languages = ['Java','JavaScript', 'Visual Basic','C++','SQL','HTML','CSS','VBA']
const technologies = ['Node.js','Express','AJAX','Mongoose','React','MySQL','MongoDB','Visual Studio','.NET','Sequelize','NoSQL','REST']
const other = ['Agile','MVC','OOP',]

export default function Summary() {
  return (
    <div>
      {/* <Row className="border-bottom">
        <Col>
          Title
        </Col>
      </Row> */}
      <Row className="border-bottom mb-2">
        
        <Col>
          Seattle, WA
        </Col>
      </Row>
      <Row>
        <Col>
        
        <Row>
          <Col className="text-left">
            <p className="fw-bold">Languages</p>
          </Col>

        </Row>
        <Row className="border-bottom mb-2">
          <Col className="d-flex flex-wrap" >  
            {languages.map(s=><a className="btn disabled btn-primary my-1 mx-1 shadow">{s}</a>)}
          </Col>
        </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col className="text-left">
            <p className="fw-bold">Technologies</p>
            </Col>

          </Row>
          <Row className="border-bottom mb-2">
            <Col className="d-flex flex-wrap" >  
              {technologies.map(s=><a className="btn disabled btn-info my-1 mx-1 shadow">{s}</a>)}
            </Col>
          </Row>
        
        </Col>
      </Row>
      <Row>
        <Col>
        <Row>
          <Col className="text-left">
          <p className="fw-bold">Other</p>
          </Col>

        </Row>
        <Row>
          <Col className="d-flex flex-wrap" >  
            {other.map(s=><a className="btn disabled btn-secondary my-1 mx-1 shadow">{s}</a>)}
          </Col>
        </Row>
        
        </Col>
      </Row>
    </div>
  )
}
