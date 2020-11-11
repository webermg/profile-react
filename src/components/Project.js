import React from 'react'

export default function Project(props) {
  return (
    <div class="card">
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.desc}</p>
        <a href={props.siteLink} class="btn btn-primary">Site</a>
        <a href={props.githubLink} class="btn btn-primary">Github</a>
      </div>
    </div>
  )
}
