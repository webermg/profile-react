import React from 'react'
import Project from './Project'

const projects = [
  {
    img: "assets/MuChoId.png",
    title: "Chord Identifier",
    desc: "An app to identify chords matching input",
    siteLink: "https://gnuartemis.github.io/Music-Chord-Identifier/index.html",
    githubLink: "https://github.com/GnuArtemis/Music-Chord-Identifier"
  },
  {
    img: "assets/weadash.png",
    title: "Weather Service",
    desc: "An app to get weather data for a location",
    siteLink: "https://webermg.github.io/Weather-Dashboard/",
    githubLink: "https://github.com/webermg/Weather-Dashboard"
  },
  {
    img: "assets/proj2.png",
    title: "Dungeons and Dragons Character Manager",
    desc: "Manage characters and calculate dice rolls",
    siteLink: "https://stark-island-65376.herokuapp.com/",
    githubLink: "https://github.com/artuis/dnd-action-calculator"
  },
  {
    img: "assets/empDBViewEmp.png",
    title: "Employee Data Service App",
    desc: "Full CRUD functionality on a MySQL backend",
    siteLink: "https://radiant-brook-03748.herokuapp.com/",
    githubLink: "https://github.com/webermg/EmployeeDB"
  },
  {
    img: "assets/ScreenshotPI.png",
    title: "Plant-it",
    desc: "Site for discussing plants and planning a garden",
    siteLink: "https://plantit-site.herokuapp.com/",
    githubLink: "https://github.com/webermg/plantit-frontend"
  },
  {
    img: "assets/Screenshotgbs.png",
    title: "Google Books Search",
    desc: "Search the Google Books service and add books to read",
    siteLink: "https://desolate-crag-54127.herokuapp.com/",
    githubLink: "https://github.com/webermg/google-book-search"
  },
]

export default function Portfolio() {

  return (
    <div class="container mt-5 mb-5">
      <div class="col-12 bg-light">
        <div class="row">
          <div class="col-12">
            <h1 class="py-3 border-bottom">Portfolio</h1>
          </div>
        </div>
        {projects.map((p,i)=>{
          if(i%2 !== 0) return;
          return (
            <React.Fragment>
              <div class="row">
                <div class="col-lg-6 border-right">
                  <Project {...projects[i]} />
                </div>
                <div class="col-lg-6">
                  <Project {...projects[i+1]} />
                </div>
              </div>
              <div class="row mx-0 border-bottom"></div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
