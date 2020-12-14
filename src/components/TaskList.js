import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { MdContentCopy, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { api } from '../api';
import Baby from '../assets/cil_baby-carriage.png';
import Car from '../assets/cil_car-alt.png';
import Dog from '../assets/cil_dog.png';
import Paw from '../assets/cil_paw.png';
import Pencil from '../assets/cil_pencil.png';
import Plant from '../assets/cil_plant.png';

const TaskList = ({count, label, date, taskId}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const taskImage = [Baby, Car, Dog, Paw, Pencil, Plant];
    
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleDelete = () => {
        const headers = {
            'authorization': 'Bearer ' + localStorage.getItem('token'),
            'content-type': 'application/json'
        }
        axios.delete(api + '/task/' + taskId + '/' + localStorage.getItem('user'), {headers})
          .then(function (res) {
            console.log(res.data);
            setShow(false);
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
        });
    }

    const defImage = (type) => {
        if(type === 'babysitting'){
            return taskImage[0];
        } else if(type === 'tutoring'){
            return taskImage[4];
        } else if(type === 'petsitting'){
            return taskImage[3];
        } else if(type === 'yardwork'){
            return taskImage[5];
        } else if(type === 'dogwalking'){
            return taskImage[2];
        } else if(type === 'pickup'){
            return taskImage[1];
        }
    }

    return (
        <>
        <li className="account-single-task">
            <div className="task-details">
                <p>{count}. </p>
                <img src={defImage(label)} alt=""/>
                <span>{capitalize(label)} <small>({date})</small></span>
            </div>
            <div className="s-task-action">
                <Link className="task-list-button" to={"/t/" + taskId}>
                    <IconContext.Provider value={{ color: "#000", size: 30 }}>
                    <MdContentCopy />
                    </IconContext.Provider>
                </Link>
                <button className="task-list-button" onClick={handleShow}>
                    <IconContext.Provider value={{ color: "#000", size: 30 }}>
                    <MdDelete />
                    </IconContext.Provider>
                </button>
            </div>
        </li>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{capitalize(label)} <small>({date})</small></Modal.Title>
            </Modal.Header>
            <Modal.Body>You sure want to delete this task?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="danger" onClick={handleDelete}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default TaskList
