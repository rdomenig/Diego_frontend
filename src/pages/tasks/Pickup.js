import axios from 'axios'
import React, { useState } from 'react'
import { Col, Form, InputGroup } from 'react-bootstrap'
import { api } from '../../api'

const Pickup = () => {
    const [date, setDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [userLocation, setUserLocation] = useState();
    const [rateType, setRateType] = useState('flat');
    const [rate, setRate] = useState();
    const [additionalInfo, setAdditionalInfo] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [user, setUser] = useState(localStorage.getItem('user'));
    const [people, setPeople] = useState();
    const [dropoff, setDropoff] = useState();
    const [refund, setRefund] = useState('norefund');
    const [error, setError] = useState(false);
    const [transport, setTransport] = useState('personalcar');

    const SubmitTask = (e) => {
        e.preventDefault();
        const headers = {
            'authorization': 'Bearer ' + localStorage.getItem('token'),
            'content-type': 'application/json'
        }
        axios.post(api + '/task/create', {
            taskType: 'pickup',
            date: date,
            startTime: startTime,
            endTime: endTime,
            location: userLocation,
            rateType: rateType,
            rate: rate,
            additionalInfo: additionalInfo,
            email: email,
            phone: phone,
            user: user,
            pickup: {
                dropoff: dropoff,
                people: people,
                refund: refund
            },
            transportation: transport
        }, {headers})
        .then(function (res) {
            window.location.href = "/t/" + res.data.task._id;
        })
        .catch(function (error) {
            setError(true);
        });
    }

    return (
        <div className="container login-section">
            <div className="row sec-title">
                <h2>Create <span>errand work</span> task</h2>
            </div>
            <div className="row">
                <div className="task-create">
                    <Form onSubmit={SubmitTask}>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" onChange={(e) => setDate(e.target.value)} required />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control type="time" onChange={(e) => setStartTime(e.target.value)} required />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>End Time</Form.Label>
                            <Form.Control type="time" onChange={(e) => setEndTime(e.target.value)} required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Rate</Form.Label>
                            <Form.Control as="select" onChange={(e) => setRateType(e.target.value)} required>
                                <option value="flat">Flat</option>
                                <option value="hourly">Hourly</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Value</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control placeholder="" onChange={(e) => setRate(e.target.value)} required />
                            </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <hr/>
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Your location" onChange={(e) => setUserLocation(e.target.value)} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Number of People</Form.Label>
                            <Form.Control type="number" placeholder="Enter number of people" onChange={(e) => setPeople(e.target.value)} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Drop-off Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter drop-off location" onChange={(e) => setDropoff(e.target.value)} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Means of transportation</Form.Label>
                            <div className="radio-row">
                                <label className="custom-input">
                                    <input type="radio" name="transport" value="personalcar" onChange={(e) => setTransport(e.target.value)} />
                                    <div className="box">
                                    Personal Car
                                    </div>
                                </label>
                                <label className="custom-input">
                                    <input type="radio" name="transport" value="uber" onChange={(e) => setTransport(e.target.value)} />
                                    <div className="box">
                                    Uber
                                    </div>
                                </label>
                                <label className="custom-input">
                                    <input type="radio" name="transport" value="publictransport" onChange={(e) => setTransport(e.target.value)} />
                                    <div className="box">
                                    Public Transport
                                    </div>
                                </label>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Refund</Form.Label>
                            <div className="radio-row">
                                <label className="custom-input">
                                    <input type="radio" name="refund" value="beforetask" onChange={(e) => setRefund(e.target.value)} />
                                    <div className="box">
                                    Given before task
                                    </div>
                                </label>
                                <label className="custom-input">
                                    <input type="radio" name="refund" value="aftertask" onChange={(e) => setRefund(e.target.value)} />
                                    <div className="box">
                                    Given after task
                                    </div>
                                </label>
                                <label className="custom-input">
                                    <input type="radio" name="refund" value="norefund" onChange={(e) => setRefund(e.target.value)} />
                                    <div className="box">
                                    No refund involved
                                    </div>
                                </label>
                            </div>
                        </Form.Group>
                        <hr/>
                        <Form.Group>
                            <Form.Label>Additional Info</Form.Label>
                            <textarea name="" id="" rows="3" placeholder="Provide some additional info" className="form-control" onChange={(e) => setAdditionalInfo(e.target.value)} required></textarea>
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Your Email"  onChange={(e) => setEmail(e.target.value)} required />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Your Phone" onChange={(e) => setPhone(e.target.value)} required />
                            </Form.Group>
                        </Form.Row>
                        <button className="login-submit" type="submit">
                            Create
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Pickup
