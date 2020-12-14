import axios from 'axios'
import React, { useState } from 'react'
import { Col, Form, InputGroup } from 'react-bootstrap'
import { api } from '../../api'

const Dogwalking = () => {
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
    const [dogs, setDogs] = useState();
    const [walkLocation, setWalkLocation] = useState();
    const [length, setLength] = useState();
    const [dogSizes, setDogSizes] = useState();
    const [dogAges, setDogAges] = useState();
    const [error, setError] = useState(false);
    const [friendly, setFriendly] = useState({});

    const friendlyCheck = [
        {
            name: 'kids',
            label: 'Kids',
        },
        {
            name: 'strangers',
            label: 'Strangers',
        },
        {
            name: 'other',
            label: 'Other Dogs',
        },
        {
            name: 'not',
            label: 'Not Friendly',
        }
    ];

    const SubmitTask = (e) => {
        e.preventDefault();
        const headers = {
            'authorization': 'Bearer ' + localStorage.getItem('token'),
            'content-type': 'application/json'
        }
        axios.post(api + '/task/create', {
            taskType: 'dogwalking',
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
            dogwalking: {
                walkLocation: walkLocation,
                dogs: dogs,
                length: length,
                sizes: dogSizes,
                ages: dogAges,
                friendly: friendly
            }
        }, {headers})
        .then(function (res) {
            window.location.href = "/t/" + res.data.task._id;
        })
        .catch(function (error) {
            setError(true);
        });
    }

    const checkFriendly = (e) => {
        setFriendly({...friendly, [e.target.name] : e.target.checked });
    }

    return (
        <div className="container login-section">
            <div className="row sec-title">
                <h2>Create <span>dog walking</span> task</h2>
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
                            <Form.Label>Walk Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter walk location" onChange={(e) => setWalkLocation(e.target.value)} required />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Length of Walk</Form.Label>
                        <InputGroup>
                            <Form.Control placeholder="" onChange={(e) => setLength(e.target.value)} required />
                            <InputGroup.Prepend>
                            <InputGroup.Text>hrs</InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Number of Dogs</Form.Label>
                            <Form.Control type="number" placeholder="Enter number of dogs" onChange={(e) => setDogs(e.target.value)} required />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>Dog Sizes</Form.Label>
                            <Form.Control type="text" placeholder='Ex: 14", 15", 16"' onChange={(e) => setDogSizes(e.target.value)} required />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>Dog Ages</Form.Label>
                            <Form.Control type="text" placeholder="Ex: 6, 7, 8" onChange={(e) => setDogAges(e.target.value)} required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Dog is friendly with</Form.Label>
                            <div className="radio-row">
                                {
                                friendlyCheck.map(item => (
                                    <label className="custom-input" key={item.name}>
                                        <input name={item.name} checked={friendly[item.name]} type="checkbox" onChange={checkFriendly} />
                                        <div className="box">
                                        {item.label}
                                        </div>
                                    </label>
                                ))
                                }
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

export default Dogwalking
