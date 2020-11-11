import React from 'react'

export default function About() {
  return (
    <div>
      <div class="container mt-5 pb-3">
            <div class="col-sm-9 bg-light rounded">
                <div class="row">
                    <div class="col-12">
                        <h1 class="py-3 border-bottom">About Me</h1>
                    </div>

                </div>
                <div class="row">
                    <div class="col-12 mt-2">
                        {/* <img src="assets/portrait.JPG" class="portrait img-fluid float-left mr-3 mb-3" alt="placeholder"/> */}
                        <p class="bio text-justify">Hello, I am Matt Weber, and I am a full stack web developer with aerospace software tool development experience. I have many skills including HTML, CSS, JavaScript/Jquery, SQL, Express, Node, and React, as well as strengths in solving problems, prototyping, and teamwork. I am passionate about approaching programming challenges from different angles and collaborating with others to bring interesting ideas to life. In addition, I am very thorough and meticulous when it comes to details and finding all edge cases. I have strong data structure and algorithmic knowledge and a thorough understanding of how computers work. I want to break boundaries and push the envelope on digital innovations. </p>
                        <p class="bio text-justify">In my most recent job I developed software tools for aircraft configuration and analysis, which gave me experience in working with an established codebase. I hope to start a new career in web development and am open to all opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
