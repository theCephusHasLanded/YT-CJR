import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
    <div className="about">
      <h1>ABOUT</h1>
          <h3><span>Hello Welcome to Our YouTube Clone Project!</span></h3>
          <p>Ray Russell, Jennifer Einstein & Christina Cephus present our Best!</p>
          <p>The YouTube Clone Project is being completed as a requirement for the Pursuit fellowship git of New York City. </p><br></br><hr></hr>
    <p><span><b>Christina Cephus</b></span> prides herself on solving modern technical complexity with pragmatic creativity. She is the founder of Low Key High Tech News.</p> 
    <p><div><a href="https://github.com/theCephusHasLanded">View Christina's Github</a></div>
</p>  
    <p> Hailing from the Golden State, <span><b>Jennifer Einstein</b></span>  moved to New York over 20 years ago and never looked back. She aims to make the modern world a better place, one line of code at a time.</p>
    <p><div><a href="https://github.com/JenniferEinstein">View Jennifer's Github</a></div>
</p>
     

    <p><span><b>Ray Russell</b></span> is the owner of <span>Rayology</span>, a wellness ecosystem. </p>
    <p><div><a href="https://github.com/RadiantRay22">View Radiant's Github</a></div>
</p>


            
    </div>
    </div>
  )
}

export default About
