import React from 'react'
import Project from './Project'
import {Row,Col} from 'react-bootstrap'

const projects = [
  {
    img: "assets/MuChoId.png",
    title: "Chord Identifier",
    technologies: ['HTML','CSS','jQuery'],
    desc: "An app to identify chords matching input",
    siteLink: "https://gnuartemis.github.io/Music-Chord-Identifier/index.html",
    githubLink: "https://github.com/GnuArtemis/Music-Chord-Identifier"
  },
  {
    img: "assets/weadash.png",
    title: "Weather Service",
    technologies: ['HTML','CSS','jQuery'],
    desc: "An app to get weather data for a location",
    siteLink: "https://webermg.github.io/Weather-Dashboard/",
    githubLink: "https://github.com/webermg/Weather-Dashboard"
  },
  {
    img: "assets/proj2.png",
    title: "Dungeons and Dragons Character Manager",
    technologies: ['MySQL','Express','jQuery','Node','Handlebars'],
    desc: "Manage characters and calculate dice rolls",
    siteLink: "https://stark-island-65376.herokuapp.com/",
    githubLink: "https://github.com/artuis/dnd-action-calculator"
  },
  {
    img: "assets/empDBViewEmp.png",
    title: "Employee Data Service App",
    technologies: ['MySQL','Express','jQuery','Node'],
    desc: "Full CRUD functionality on a MySQL backend",
    siteLink: "https://radiant-brook-03748.herokuapp.com/",
    githubLink: "https://github.com/webermg/EmployeeDB"
  },
  {
    img: "assets/ScreenshotPI.png",
    title: "Plant-it",
    technologies: ['MongoDB','Express','React','Node'],
    desc: "Site for discussing plants and planning a garden",
    siteLink: "https://plantit-site.herokuapp.com/",
    githubLink: "https://github.com/webermg/plantit-frontend"
  },
  {
    img: "assets/Screenshotgbs.png",
    title: "Google Books Search",
    technologies: ['MongoDB','Express','React','Node'],
    desc: "Search the Google Books service and add books to read",
    siteLink: "https://desolate-crag-54127.herokuapp.com/",
    githubLink: "https://github.com/webermg/google-book-search"
  },
]

export default function Portfolio() {

  return (
    
      <Col xs={12} className="">
        <Row>
          <Col xs={12} >
            <h1 className="py-3 border-bottom">Projects</h1>
          </Col>
        </Row>
        {projects.map((p,i)=>{
          if(i%2 !== 0) return;
          return (
              <Row className="border-bottom my-3">
                <Col lg={6} className="border-right">
                  <Project {...projects[i]} />
                </Col>
                <Col lg={6}>
                  <Project {...projects[i+1]} />
                </Col>
              </Row>
          )
        })}
      </Col>
  )
}
