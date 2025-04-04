import React from 'react'
import "./SkillExp.css"
import INFO from './myInfo';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbHexagonLetterC } from "react-icons/tb";
import { TfiDrupal } from "react-icons/tfi";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoGitBranchOutline } from "react-icons/io5";

const SkillExp = () => {
  const [typeSkill] = useTypewriter({
    'words': INFO.skillsec.skills,
    'loop': {},
    'typeSpeed': 70,
    'deleteSpeed': 40,
  });
  return (
    <div id='experience' className="skillExpSec">
      <div className="redun1"></div>
      <div className="skillExpCont">
        <div className="skillLeft">
          <h2>{INFO.skillsec.title}</h2>
          <p>My skills include <span>{typeSkill}<Cursor/></span></p>
          <div className="skillCont">
            <div className="skill">
              <span><SiCplusplus /></span>
              <p>C++</p>
            </div>
            <div className="skill">
              <span><TbHexagonLetterC /></span>
              <p>C</p>
            </div>
            <div className="skill">
              <span><FaPython /></span>
              <p>C</p>
            </div>
            <div className="skill">
              <span><FaHtml5 /></span>
              <p>HTML</p>
            </div>
            <div className="skill">
            <span><FaCss3Alt /></span>
              <p>CSS</p>
            </div>
            <div className="skill">
            <span><RiTailwindCssFill /></span>
              <p>Tailwind CSS</p>
            </div>
            <div className="skill">
            <span><SiJavascript /></span>
              <p>JavaScript</p>
            </div>
            <div className="skill">
            <span><FaNode /></span>
              <p>Node JS</p>
            </div>
            <div className="skill">
            <span><RiReactjsFill /></span>
              <p>React JS</p>
            </div>
            <div className="skill">
            <span><SiMongodb /></span>
              <p>Mongo DB</p>
            </div>
            <div className="skill">
            <span><SiMysql/></span>
              <p>Mysql</p>
            </div>
            <div className="skill">
            <span><TfiDrupal /></span>
              <p>Drupal</p>
            </div>
            <div className="skill">
            <span><IoGitBranchOutline /></span>
              <p>git</p>
            </div>

          </div>
        </div>
        <div className="skillRight">
  <h2>Work Experience</h2>

  <div className="work">
    <h3>Research Intern – RCI, DRDO</h3>
    <p>
      As a Research Intern at the Research Centre Imarat (RCI), DRDO, I worked on energy management systems for supercapacitors and batteries used in aerospace applications. My role involved researching various power sources, including independent and controlled supplies, to improve energy efficiency. I analyzed the use of supercapacitors in hybrid and aerospace systems and contributed to the design and simulation of a Battery Management System (BMS) with advanced protection mechanisms. I also explored centralized, modular, and distributed BMS architectures, and gained hands-on experience with MOSFET-based power regulation, thermal management, and circuit simulation techniques.
    </p>
  </div>

  <div className="work">
    <h3>Web Development Intern – OctaNet Services</h3>
    <p>
      During my internship at OctaNet Services, I worked as a Full Stack Web Developer and contributed to the development of two projects. I built a responsive landing page using HTML, CSS, and JavaScript, focused on creating an engaging user experience. Additionally, I developed a Todo List application using React.js with LocalStorage integration for persistent data management. This experience enhanced my front-end development skills, particularly in building interactive UIs using state management, event handling, and reusable components. I also improved my understanding of full-stack development and front-end performance optimization.
    </p>
  </div>
</div>


    </div>
    </div>
  )
}

export default SkillExp