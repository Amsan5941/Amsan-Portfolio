import React from 'react'
import './About.css'
import profile_img from '../../assets/VIX_8328.JPG'

const About = () => {
  const skills = [
    { skill: 'React JS', width: '90%' },
    { skill: 'HTML & CSS', width: '95%' },
    { skill: 'JavaScript', width: '92.5%' },
    { skill: 'C++', width: '90%' },
    { skill: 'Python', width: '97%' }
  ]

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt='Profile' />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a 20-year-old Computer Science student from Toronto, Ontario, currently pursuing my degree at Toronto Metropolitan University.
              My passion lies in programming, algorithm design, and creative problem-solving.
            </p>
          </div>

          <div className="about-skills">
            {skills.map(({ skill, width }) => (
              <div className="about-skill" key={skill}>
                <p>{skill}</p>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-achievements">
        {[
          { count: '5+', label: 'YEARS OF EXPERIENCE' },
          { count: '75+', label: 'PROJECTS COMPLETED' },
          { count: '10+', label: 'ACHIEVEMENTS' }
        ].map(({ count, label }) => (
          <div className="about-achieve" key={label}>
            <h1>{count}</h1>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
