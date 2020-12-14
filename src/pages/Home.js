import React from 'react'
import { Link } from 'react-router-dom'
import AppPreview from '../assets/app-preview.png'
import Baby from '../assets/cil_baby-carriage.png'
import Car from '../assets/cil_car-alt.png'
import Dog from '../assets/cil_dog.png'
import Paw from '../assets/cil_paw.png'
import Pencil from '../assets/cil_pencil.png'
import Plant from '../assets/cil_plant.png'
import Hero from '../assets/hero-bg.png'

const Home = () => {
    return (
        <>
        <section className="hero-area section-padding blue-overlay" style={{backgroundImage: 'url(' + Hero + ')'}}>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <h1>The fastest and easiest way to hire <span>trustworthy teens</span></h1>
                        <p><b>Save</b> time on daily chores and fully <b>equip</b> your tasker by using our FREE custom task templates</p>
                        <Link to="/create">Create a Task</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="task-feature section-padding">
            <div className="container">
                <div className="row sec-title">
                    <h2>Create <span>Any Type of Task!</span></h2>
                </div>
                <div className="ftask-cont">
                    <div className="ftask-single">
                        <img src={Baby} alt=""/>
                        <h4>Babysitting</h4>
                    </div>
                    <div className="ftask-single">
                        <img src={Dog} alt=""/>
                        <h4>Dogwalking</h4>
                    </div>                    
                    <div className="ftask-single">
                        <img src={Plant} alt=""/>
                        <h4>Yard Work</h4>
                    </div>                    
                    <div className="ftask-single">
                        <img src={Pencil} alt=""/>
                        <h4>Tutoring</h4>
                    </div>
                    <div className="ftask-single">
                        <img src={Paw} alt=""/>
                        <h4>Petsitting</h4>
                    </div>
                    <div className="ftask-single">
                        <img src={Car} alt=""/>
                        <h4>Errands</h4>
                    </div>
                </div>
            </div>
        </section>
        <section className="app-preview section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 my-auto">
                        <h2>App coming soon! <br/> <span>Get it first</span></h2>
                        <ul>
                            <li>Empowering teenagers to find an array of jobs from people they trust.</li>
                            <li>Enabling adults to find trustworthy help with daily chores.</li>
                        </ul>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    <div className="col-md-5 text-center">
                        <img src={AppPreview} alt=""/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home
