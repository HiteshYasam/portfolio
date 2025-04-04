import React  from 'react'
import profile from "/assets/profile.jpeg";
import INFO from './myInfo';
import "./Hero.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Hero = () => {
    const [typeSkill] = useTypewriter({
        'words': INFO.herosec.profession,
        'loop': {},
        'typeSpeed': 70,
        'deleteSpeed': 40,
    });

    const [showResume, setShowResume] = useState(false);

    return ( <section id='about' className='container'>
        <div className="redun"></div>
        <div className='main'>
        <div className="mainLeft">
            <h1>{INFO.herosec.title}</h1>
            <h2>I'm a <span>{typeSkill}{<Cursor/>}</span></h2>
            <p>{INFO.herosec.objective}</p>
            <div className="mainBtns">
                <button className='mainBtn' onClick={() => setShowResume(true)}><a>Resume</a></button>
                <button className='mainBtn'><a href="#contact">Contact</a></button>
            </div>
        </div>
        <div className="mainRight">
            <img src={profile} alt="profile" />
        </div>
        </div>

        {showResume && (
        <div className="resumeModal" onClick={() => setShowResume(false)}>
          <div className="resumeContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setShowResume(false)}>X</button>
            <iframe src="/resume.pdf" title="Resume" width="100%" height="100%"></iframe>
          </div>
        </div>
      )}
    </section>
    )
}

export default Hero
