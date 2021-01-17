import React from 'react'
import Bio from './Bio'
import Contact from './Contact'

export default function About() {
  return (
    <div>
      <div class="container mt-5 pb-3">
            <div class="col-12 bg-light rounded">
                <div class="row">
                    <div class="col-12">
                        <h1 class="py-3 border-bottom">About Me</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mt-2">
                        <Bio/>
                    </div>
                </div>
                <div className="row">
                    <div class="col-12 mt-2">
                        <Contact/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
