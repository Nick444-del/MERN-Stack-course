import React from 'react'
import './Services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Frontend Developer</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icons" />
                            <p>Can create creative hero pages.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icons" />
                            <p>Have a good knowledge of responsive web Development.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icons" />
                            <p>Know about the frameworks like BootStrap, tailwind css, Reactjs, etc.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icons" />
                            <p>Maded many frondend web projects and stored in Github.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UX/UI */}
                <article className="service">
                    <div className="service__head">
                        <h3>Backend Developer</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icons" />
                            <p>Know how to work with Database.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icons" />
                            <p>Know how to work with API and also create them.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icons" />
                            <p>Good in logic building.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF wEB DEVELOPMENT */}
                {/* CONTENT CREATION */}
            </div>
        </section>
    )
}

export default Services