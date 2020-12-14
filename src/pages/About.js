import React from 'react'
import Hero from '../assets/about-bg.png'
import Nassouh from '../assets/image1.png'
import Sarah from '../assets/image2.jpg'
import Marie from '../assets/image3.jpg'
import Aneesh from '../assets/image6.jpg'

const About = () => {
    return (
        <>
        <section className="about-area section-padding blue-overlay" style={{backgroundImage: 'url(' + Hero + ')'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1><span>Our Story</span></h1>
                        <p>In 2016, I was sitting in my sixth form common room at school pointing out how difficult it is to make pocket money. My friends really related - we all agreed that as a teenager not only is it hard to find work, but even harder to find it with adults that both you and your parents trust. My mum would never have let me babysit or walk a dog for a stranger! There was just nothing out there that was teenage-friendly. Thinking about this I realised that I had stumbled across a real gap in the market: a platform that caters for both busy adults and teenagers who are restricted to working for people they already trust. From this, Pocketask was born: an app designed by teenagers for teenagers.
                        </p>
                        <p>But parents - I haven’t forgotten you! As the eldest of six children, I saw first-hand the struggle my mum went through to organise the logistics surrounding babysitting- the A4 instruction sheet stuck to the fridge would often fall off, my brothers would modify their bedtimes, or it would simply fall off! From now on Pocketask is there to organise everything for you from beginning to end.
                        </p>
                        <p>
                        -Marie<br/>
                        CEO @Pocketask
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="team-area section-padding">
            <div className="container">
                <div className="row sec-title">
                    <h2><span>Our Team</span></h2>
                </div>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4">
                        <div className="team-profile">
                            <img src={Marie} alt=""/>
                            <h4>Marie-Liesse Gouilliard</h4>
                            <h5>CEO</h5>
                            <p>Bachelor of Computer science and Economics at the University of Chicago</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-profile">
                            <img src={Nassouh} alt=""/>
                            <h4>Nassouh Kabbani</h4>
                            <h5>COO</h5>
                            <p>Bachelor of Mathematics with Specialisation in Economics at the University of Chicago</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4">
                        <div className="team-profile">
                            <img src={Sarah} alt=""/>
                            <h4>Sarah Mostow</h4>
                            <h5>Head of Marketing</h5>
                            <p>Bachelor of Mathematics at the University of Chicago</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-profile">
                            <img src={Aneesh} alt=""/>
                            <h4>Aneesh Bafna</h4>
                            <h5>Head of Finance</h5>
                            <p>Bachelor of Economics and Public Policy at the University of Chicago</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About
