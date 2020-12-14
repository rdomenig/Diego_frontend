import React from 'react'
import { Form } from 'react-bootstrap'
import Slide2 from '../assets/image4.png'
import Slide1 from '../assets/image5.png'

const AppPage = () => {
    return (
        <>
        <section className="app-form-area section-padding" id="signup">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <form>
                            <div className="form-module">
                                <h2>Be the first to get the app!</h2>
                                <input type="text" className="form-control" placeholder="Name"/>
                                <input type="email" className="form-control" placeholder="Email"/>
                                <fieldset>
                                <Form.Group>
                                    <Form.Label>I want to...</Form.Label>
                                    <Form.Check type="checkbox" label="Become a tasker" name="become-tasker" id="becomeTasker" />
                                    <Form.Check type="checkbox" label="Hire a tasker" name="hire-tasker" id="hireTasker" />
                                </Form.Group>
                            </fieldset>
                                <textarea className="form-control" rows="3" placeholder="Any comments, questions, or feedback? We’d love to hear it - type it here!"></textarea>
                            </div>
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section className="app-preview section-padding bgwhite">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 my-auto">
                        <h2><span>Teens - find tasks with people you trust.</span></h2>
                        <h3>A app designed by teenagers, <br/>for teenagers.</h3>
                        <ol>
                            <li>Personalise and build your trust network.</li>
                            <li>Search the jobs you want to do posted by people you trust.</li>
                            <li>Accept jobs that work with your schedule.</li>
                            <li>Safely carry out your task with our live task features.</li>
                        </ol>
                    </div>
                    <div className="col-md-5 text-center">
                        <img src={Slide1} alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section className="app-preview section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 text-center">
                        <img src={Slide2} alt=""/>
                    </div>
                    <div className="col-md-7 my-auto">
                        <h2>Adults - Create and post tasks to teenagers you trust</h2>
                        <h3>Let Pocketask do all the task organisation worrying for you!</h3>
                        <ol>
                            <li>Personalise and build your trust network.</li>
                            <li>Use our custom templates to post any task faster than ever before.</li>
                            <li>Let our trust algorithm do the work.</li>
                            <li>Safely carry out your task with our live task features.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <section className="app-coming section-padding">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <h2>App coming soon.... <br/> Get it first</h2>
                        <a href="#signup"><button>Get Notified</button></a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AppPage
