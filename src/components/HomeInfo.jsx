import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContext = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Akshit Kansal</span> 👋🏻
            <br/>
            A Software Engineer from India
        </h1>
    ),
    2:(
       <InfoBox
        text="I am a passionate software developer who blends innovation with precision, crafting elegant, user-focused solutions that simplify complex challenges and create seamless experiences."
        link="/About"
        btnText="Learn more"
       />
    ),
    3:(
        <InfoBox
        text={`Since the Beginning of my journey as a developer, I've done many projects with talanted people to create digital products for both business and consumer use`}
        link="/projects"
        btnText="Visit my portfolio"
       />
    ),
    4:(
        <InfoBox
        text="Need a project done or looking for a dev? I'm just a few keystokes away"
        link="/contact"
        btnText="Let's talk"
       />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContext [currentStage] || null;
}

export default HomeInfo
