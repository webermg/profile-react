import React from 'react'

export default function Project(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="flex-center">
          {props.technologies.map(t=><a href={props.siteLink} className="btn disabled btn-secondary mx-1">{t}</a>)}
        </div>
        <p className="card-text">{props.desc}</p>
        <a href={props.siteLink} className="btn btn-primary mx-1">Site</a>
        <a href={props.githubLink} className="btn btn-success mx-1">Github</a>
      </div>
    </div>
  )
}
