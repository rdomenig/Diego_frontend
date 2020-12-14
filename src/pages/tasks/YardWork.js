import axios from 'axios'
import React, { useState } from 'react'
import { Col, Form, InputGroup } from 'react-bootstrap'
import { api } from '../../api'

const YardWork = () => {
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
    const [tools, setTools] = useState(false);
    const [error, setError] = useState(false);
    const [transport, setTransport] = useState('beforejob');
    const [checkedItems, setCheckedItems] = useState({});

    const checkboxes = [
        {
            name: 'gardening',
            label: 'Gardening',
        },
        {
            name: 'cleaning',
            label: 'Cleaning Garage/Shed',
        },
        {
            name: 'mowing',
            label: 'Mowing',
        },
        {
            name: 'snowshoveling',
            label: 'Snow Shoveling',
        }
    ];

    const SubmitTask = (e) => {
        e.preventDefault();
        const headers = {
            'authorization': 'Bearer ' + localStorage.getItem('token'),
            'content-type': 'application/json'
        }
        axios.post(api + '/task/create', {
            taskType: 'yardwork',
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
            yardwork: {
                responsibilities: checkedItems,
                tools: tools
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

    const checkChange = (e) => {
        setCheckedItems({...checkedItems, [e.target.name] : e.target.checked });
    }

    return (
        <div className="container login-section">
            <div className="row sec-title">
                <h2>Create <span>yard work</span> task</h2>
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
                            <Form.Label>Responsibilites</Form.Label>
                            <div className="radio-row res-row">
                                {
                                checkboxes.map(item => (
                                    <label className="custom-input" key={item.name}>
                                        <input name={item.name} checked={checkedItems[item.name]} type="checkbox" onChange={checkChange} />
                                        <div className="box">
                                        {item.label}
                                        </div>
                                    </label>
                                ))
                                }
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Your location" onChange={(e) => setUserLocation(e.target.value)} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Tools Provided?</Form.Label>
                            <div className="radio-row">
                                <label className="custom-input">
                                    <input type="radio" name="tools" onChange={(e) => setTools(true)} />
                                    <div className="box">
                                    Yes
                                    </div>
                                </label>
                                <label className="custom-input">
                                    <input type="radio" name="tools" onChange={(e) => setTools(false)} />
                                    <div className="box">
                                    No
                                    </div>
                                </label>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Can Provide Transportation</Form.Label>
                            <div className="radio-row">
                                <label className="custom-input">
                                    <input type="radio" name="transport" value="beforejob" onChange={(e) => setTransport(e.target.value)} />
                                    <div className="box">
                                    Before Job
                                    </div>
                                </label>
                                <label className="custom-input">
                                    <input type="radio" name="transport" value="afterjob" onChange={(e) => setTransport(e.target.value)} />
                                    <div className="box">
                                    After Job
                                    </div>
                                </label>
                            </div>
                            <div className="radio-row">
                                <label className="custom-input">
                                    <input type="radio" name="transport" value="beforeandafter" onChange={(e) => setTransport(e.target.value)} />
                                    <div className="box">
                                    Before and After
                                    </div>
                                </label>
                                <label className="custom-input">
                                    <input type="radio" name="transport" value="cantprovide" onChange={(e) => setTransport(e.target.value)} />
                                    <div className="box">
                                    Can't Provide
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

export default YardWork
