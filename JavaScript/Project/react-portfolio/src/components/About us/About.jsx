import React from 'react'
import './About.css'
import me from '../../assets/about me.jpg';
import { FaAward, FaUsers, FaFolder } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me__image">
                        <img src={me} alt="About image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>Fresher</small>
                        </article>
                        {/* <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Qualification</h5>
                            <small>Masters in Information Technology</small>
                        </article> */}
                        <article className="about__card">
                            <FaFolder className="about__icon" />
                            <h5>Projects</h5>
                            <small><a rel="stylesheet" href="https://github.com/Nick444-del" >Github</a></small>
                        </article>
                    </div>

                    <p>
                        Hello! I'm a tech enthusiast with a Master's degree in Information Technology and a background in Computer Applications. My expertise spans in MERN Stack Development and frontend development. Passionate about leveraging technology to solve real-world challenges, I thrive to create new and innovative solutions and solve problems regarding web development. Let's connect and explore the exciting possibilities in the digital realm!
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About