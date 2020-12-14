import axios from 'axios'
import React, { useState } from 'react'
import { Col, Form, InputGroup } from 'react-bootstrap'
import { api } from '../../api'

const Petsitting = () => {
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
    const [cats, setCats] = useState();
    const [others, setOthers] = useState();
    const [breed, setBreed] = useState();
    const [fedDay, setFedDay] = useState();
    const [walkedDay, setWalkedDay] = useState();
    const [sittingType, setSittingType] = useState('regular');
    const [error, setError] = useState(false);
    const [transport, setTransport] = useState('beforejob');
    const [checkedItems, setCheckedItems] = useState({});

    const checkboxes = [
        {
            name: 'feeding',
            label: 'Feeding',
        },
        {
            name: 'walking',
            label: 'Walking',
        },
        {
            name: 'playing',
            label: 'Playing',
        },
        {
            name: 'grooming',
            label: 'Grooming',
        }
    ];

    const SubmitTask = (e) => {
        e.preventDefault();
        const headers = {
            'authorization': 'Bearer ' + localStorage.getItem('token'),
            'content-type': 'application/json'
        }
        axios.post(api + '/task/create', {
            taskType: 'petsitting',
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
            petsitting: {
                responsibilities: checkedItems,
                dogs: dogs,
                cats: cats,
                others: others,
                breed: breed,
                fedDay: fedDay,
                walkedDay: walkedDay,
                sittingType: sittingType
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
                <h2>Create <span>petsitting</span> task</h2>
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
                            <Form.Label>Number of Pets</Form.Label>
                            <div className="row">
                                <div className="col">
                                    <InputGroup>
                                        <Form.Control type="number" placeholder="" onChange={(e) => setDogs(e.target.value)} />
                                        <InputGroup.Prepend>
                                        <InputGroup.Text>Dogs</InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </div>
                                <div className="col">
                                    <InputGroup>
                                        <Form.Control type="number" placeholder="" onChange={(e) => setCats(e.target.value)} />
                                        <InputGroup.Prepend>
                                        <InputGroup.Text>Cats</InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col">
                                    <InputGroup>
                                        <Form.Control type="text" placeholder="Ex: bird, rabbit" onChange={(e) => setOthers(e.target.value)} />
                                        <InputGroup.Prepend>
                                        <InputGroup.Text>Others (Please specify)</InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Breed Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter your pet's breed type" onChange={(e) => setBreed(e.target.value)} required />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Label>No. of times to be fed/day</Form.Label>
                            <Form.Control type="number" onChange={(e) => setFedDay(e.target.value)} required />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label>No. of times to be walked/day</Form.Label>
                            <Form.Control type="number" onChange={(e) => setWalkedDay(e.target.value)} required />
                            </Form.Group>
                        </Form.Row>
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
                            <Form.Label>Type of sitting</Form.Label>
                            <div className="radio-row">
                                <label className="custom-input">
                                    <input type="radio" name="sittingType" value="overnight" onChange={(e) => setSittingType(e.target.value)} />
                                    <div className="box">
                                    Overnight Stay
                                    </div>
                                </label>
                                <label className="custom-input">
                                    <input type="radio" name="sittingType" value="regular" onChange={(e) => setSittingType(e.target.value)} />
                                    <div className="box">
                                    Regular Check-Ins
                                    </div>
                                </label>
                                <label className="custom-input">
                                    <input type="radio" name="sittingType" value="sitting" onChange={(e) => setSittingType(e.target.value)} />
                                    <div className="box">
                                    Sitting at Sitter's Home
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

export default Petsitting
