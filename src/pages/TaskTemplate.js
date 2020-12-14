import axios from 'axios'
import moment from "moment"
import React, { useEffect, useRef, useState } from 'react'
import { IconContext } from 'react-icons'
import { MdContentCopy } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { api } from '../api'
import Email from '../assets/email.svg'
import Phone from '../assets/phone.svg'
import BabyTemp from './Templates/BabyTemp'
import DogTemp from './Templates/DogTemp'
import PetTemp from './Templates/PetTemp'
import PickupTemp from './Templates/PickupTemp'
import TutorTemp from './Templates/TutorTemp'
import YardTemp from './Templates/YardTemp'

const TaskTemplate = () => {
    const [task, setTask] = useState();
    const [taskType, setTaskType] = useState();
    const [transport, setTransport] = useState();
    const [loading, setLoading] = useState(true);
    const [copySuccess, setCopySuccess] = useState(false);
    const textAreaRef = useRef(null);
    const { taskId } = useParams();

    useEffect(() => {
        axios.get(api + '/task/' + taskId)
          .then(function (res) {
            setTask(res.data);
            taskInit(res.data);
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
        });
    }, [taskId]);

    const copyToClipboard = (e) => {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess(true);
    }

    const taskInit = (task) => {
        
        if(task.taskType === 'babysitting'){
            setTaskType('Babysitter');
        } else if(task.taskType === 'tutoring'){
            setTaskType('Tutor');
        } else if(task.taskType === 'pickup'){
            setTaskType('errand work');
        } else if(task.taskType === 'yardwork'){
            setTaskType('yard work');
        } else if(task.taskType === 'dogwalking'){
            setTaskType('dogwalker');
        } else if(task.taskType === 'petsitting'){
            setTaskType('petsitter');
        }

        if(task.transportation === 'beforejob'){
            setTransport('I can provide transportation before the job');
        } else if(task.transportation === 'afterjob'){
            setTransport('I can provide transportation after the job');
        } else if(task.transportation === 'beforeandafter'){
            setTransport('I can provide transport before and after the job');
        } else if(task.transportation === 'cantprovide'){
            setTransport('I can\'t provide transport')
        }
    }

    if(loading){
        return "";
    }

    const formatTime = (date) => {
        let formattedDate = moment.utc(date).format("YYYYMMDDTHHmmssZ");
        return formattedDate.replace("+00:00", "Z");
    }

    const googleCalendar = () => {
        const startTime = new Date(task.date + ' ' + task.startTime);
        const endTime = new Date(task.date + ' ' + task.endTime);
        let calendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
        calendarUrl += "&dates=" + formatTime(startTime);
        calendarUrl += "/" + formatTime(endTime);
        calendarUrl += "&location=" + encodeURIComponent(task.location);
        calendarUrl += "&text=" + encodeURIComponent(task.taskType);
        calendarUrl += "&details=" + encodeURIComponent(task.additionalInfo);
        window.open(calendarUrl, '_blank');
    }

    const defTask = () => {
        if(task.taskType === 'babysitting'){
            return (<BabyTemp task={task} transport={transport} />)
        } else if(task.taskType === 'tutoring') {
            return (<TutorTemp task={task} transport={transport} />)
        } else if(task.taskType === 'pickup') {
            return (<PickupTemp task={task} />)
        } else if(task.taskType === 'yardwork') {
            return (<YardTemp task={task} transport={transport} />)
        } else if(task.taskType === 'dogwalking') {
            return (<DogTemp task={task} />)
        } else if(task.taskType === 'petsitting') {
            return (<PetTemp task={task} transport={transport} />)
        }
    }

    return (
        <div>
            <div className="task-header">
                <h1>I'm looking for a <span>{taskType}</span></h1>
            </div>
            
            {defTask()}

            <div className="row text-center w-100">
                <h3 className="w-100"><strong>additional info</strong></h3>
            </div>
            <div className="task-body task-body-2">
                <div className="container">
                    <div className="task-block">
                        <h4>{task.additionalInfo}</h4>
                    </div>
                </div>
            </div>
            <div className="row text-center w-100">
                <h3 className="w-100" className="res-h3"><strong>if interested, please contact me by</strong></h3>
            </div>
            <div className="task-contact">
                <div className="contact-block">
                    <img src={Email} alt=""/>
                    <h4><a href={"mailto:" + task.email}>{task.email}</a></h4>
                </div>
                <div className="contact-block">
                    <img src={Phone} alt=""/>
                    <h4><a href={"tel:" + task.phone}>{task.phone}</a></h4>
                </div>
            </div>
            <div className="task-action">
                <div className="container">
                    <div className="copy-block">
                        <input type="text" ref={textAreaRef} className="form-control" value={"https://mypocketask.com/t/" + task._id} />
                        <button className="copy-button" onClick={copyToClipboard}>
                            <IconContext.Provider value={{ color: "#000", size: 30 }}>
                            <MdContentCopy />
                            </IconContext.Provider>
                        </button>
                        {copySuccess && (
                        <span>Copied!</span>
                        )}
                    </div>
                    <div className="g-block">
                        <button className="add-calendar-button" onClick={googleCalendar}>Add to Google Calendar</button>
                    </div>
                </div>
            </div>
            <div className="task-footer">
                <h2>Created with Pocketask (<a href="https://mypocketask.com">mypocketask.com</a>)</h2>
            </div>
        </div>
    )
}

export default TaskTemplate
