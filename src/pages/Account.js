import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { api } from '../api';
import TaskList from '../components/TaskList';

const Account = () => {
    const [user, setUser] = useState();
    const [tasks, setTasks] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const headers = {
            'authorization': 'Bearer ' + localStorage.getItem('token'),
            'content-type': 'application/json'
        }
        axios.get(api + '/user/' + localStorage.getItem('user'), {headers})
          .then(function (res) {
            setUser(res.data);
          })
          .catch(function (error) {
            console.log(error);
        });
        axios.get(api + '/tasks/user/' + localStorage.getItem('user'), {headers})
          .then(function (res) {
            setTasks(res.data);
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
        });
    }, [])

    const signout = () => {
        axios.get(api + '/signout')
          .then(function (res) {
              console.log(res);
              localStorage.clear();
              window.location.href = '/login';
          })
          .catch(function (error) {
            console.log(error);
        });
    }
    
    if(!localStorage.getItem('login')){
        window.location.href = '/login';
        return 'Loading...';
    }

    if(loading){
        return "";
    }

    return (
        <div className="container login-section">
            <div className="row sec-title">
                <h2>Hello, {user.firstname + " " + user.lastname}</h2>
                <button onClick={signout}>Sign Out</button>
            </div>
            <div className="row">
                <ul className="task-listing">
                    {tasks.map((task, index) => (
                    <TaskList count={index + 1} label={task.taskType} date={task.date} taskId={task._id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Account
