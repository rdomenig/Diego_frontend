import React from 'react'
import { Form } from 'react-bootstrap'

const Contact = () => {
    return (
        <>
        <section className="app-form-area section-padding">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <form>
                            <div className="form-module">
                                <h2>Contact us</h2>
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
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact
