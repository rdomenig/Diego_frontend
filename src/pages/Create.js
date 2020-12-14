import React from 'react'
import { Link } from 'react-router-dom'
import Baby from '../assets/cil_baby-carriage.png'
import Car from '../assets/cil_car-alt.png'
import Dog from '../assets/cil_dog.png'
import Paw from '../assets/cil_paw.png'
import Pencil from '../assets/cil_pencil.png'
import Plant from '../assets/cil_plant.png'
import Create1 from '../assets/create-1.png'
import Create2 from '../assets/create-2.png'

const Create = () => {
    return (
        <div className="container container-task login-section">
            <div className="row sec-title">
                <h2>Do a pocket task<br/> Make <span>pocket money</span></h2>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <h3 className="task-list-title">Step 1: <br/> <span>Choose a template.</span></h3>
                </div>
                <div className="col-md-6">
                    <div className="task-list">
                        <div className="single-task">
                            <Link to="/create/babysitting">
                                <img src={Baby} alt=""/>
                                <p>Babysitting</p>
                            </Link>
                        </div>
                        <div className="single-task">
                            <Link to="/create/yardwork">
                                <img src={Plant} alt=""/>
                                <p>Yard Work</p>
                            </Link>
                        </div>
                    </div>
                    <div className="task-list middle-task-list">
                        <div className="single-task">
                            <Link to="/create/dogwalking">
                                <img src={Dog} alt=""/>
                                <p>Dogwalking</p>
                            </Link>
                        </div>
                        <div className="single-task">
                            <Link to="/create/pickup">
                                <img src={Car} alt=""/>
                                <p>Errands</p>
                            </Link>
                        </div>
                    </div>
                    <div className="task-list">
                        <div className="single-task">
                            <Link to="/create/tutoring">
                                <img src={Pencil} alt=""/>
                                <p>Tutoring</p>
                            </Link>
                        </div>
                        <div className="single-task">
                            <Link to="/create/petsitting">
                                <img src={Paw} alt=""/>
                                <p>Petsitting</p>
                            </Link>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="row task-feature-row">
                <div className="col-md-7 d-flex align-items-center">
                    <img src={Create1} alt=""/>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <h3 className="task-list-title">Step 2: <br/> <span>Quickly and easily fill out information you need.</span></h3>
                </div>
            </div>
            <div className="row task-feature-row">
                <div className="col-md-7 d-flex align-items-center">
                    <h3 className="task-list-title">Step 3: <br/> <span>Post your task to social media or directly to your contacts.</span></h3>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <img src={Create2} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Create
