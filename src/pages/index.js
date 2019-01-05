import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1 className="lg-heading"
      style={{
        marginTop: `50px`
      }}>
      Waqar <span className="text-secondary">Mohammad</span>
    </h1>
    <h2 className="sm-heading">Web Developer</h2>
    <div className="about-info">
      <img
        src="https://via.placeholder.com/300"
        alt="Waqar Mohammad"
        className="bio-image"
      />
      <div className="bio">
        <p>
          <span className="text-secondary">
            I'm a Javascript and Laravel focused developer currently seeking
            suitable roles.
          </span>
          <br /> After graduating with a Law Degree, I decided to stick with my
          passion for software engineering through self-learning. Feel free to
          look at my <Link to="portfolio">portfolio</Link> and 
          <Link to="contact"> contact me</Link> if you feel we can work
          together. I've listed my focus areas below for{' '}
          <span className="text-secondary">fall/winter 2018</span>.
        </p>
      </div>
      <div class="icons">
        <Link to="https://twitter.com/lawyerscode" className="fab fa-twitter fa-3x"></Link>


        <Link to="https://www.linkedin.com/in/waqar-mohammad-3aa11156/" className="fab fa-linkedin fa-3x"></Link>
        <Link to="https://github.com/waqardm" className=""></Link>
        <Link to="" className=""></Link>


            <a href="https://github.com/waqardm" target="_blank">
                <i class="fab fa-github fa-3x"></i>
            </a>
            <a href="https://dev.to/waqardm" target="_blank">
                <i class="fab fa-dev fa-3x"></i>
            </a>
        </div>
      <div className="job job1">
        <h3>FreeCodeCamp</h3>
        <h4>Javascript, Algorithms and Data Visulisation</h4>
        <p>
          Continue working through the curriculam on FCC which has recently been
          updated. I aim to finish 75% by Spring 2019
        </p>
      </div>
      <div className="job job2">
        <h3>React</h3>
        <h4>Familiarising with React</h4>
        <p>Work on understanding the React ecosystem and best usecases</p>
      </div>
      <div className="job job3">
        <h3>Personal</h3>
        <h4>Blogging and Basic Video Tutorials</h4>
        <p>
          Start blogging on basic subjects to solidify knowledge and increase
          exposure which will help with job search.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
