import React, { useEffect, useState } from 'react';

const TutorTemp = ({task, transport}) => {
    const [res, setRes]= useState([]);

    useEffect(() => {
        if(task.tutoring.responsibilities){
            setRes(checkSetter(task.tutoring.responsibilities))
        }
    }, [])

    const checkSetter = (value) => {
        let checkValue = [];
        for (const key in value) {
            if(value[key]){
                checkValue.push(key);
            }
        }
        return checkValue;
    }

    const tConvert = (time) => {
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) {
          time = time.slice (1);
          time[5] = +time[0] < 12 ? 'am' : 'pm';
          time[0] = +time[0] % 12 || 12;
        }
        return time.join ('');
    }

    const defRes = (res) => {
        if(res === 'homework'){
            return 'homework help';
        } else if(res === 'newmaterial'){
            return 'teach new material';
        } else if(res === 'lessonmaterial'){
            return 'provide lesson material';
        } else if(res === 'testprep'){
            return 'standardized test prep';
        }
    }

    return (
        <>
        <div className="task-body">
            <div className="container">
                <div className="task-block">
                    <h4>When</h4>
                    <h4><strong>{task.date}</strong> from <strong>{tConvert(task.startTime)}</strong> to <strong>{tConvert(task.endTime)}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>Where</h4>
                    <h4><strong>{task.tutoring.type === 'virtual' ? 'Virtual' : task.location}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>Rate</h4>
                    <h4><strong>${task.rate}{task.rateType === 'hourly' ? '/hr': ''}</strong></h4>
                </div>
            </div>
        </div>
        <div className="row text-center w-100">
            <h3 className="w-100"><strong>about the job...</strong></h3>
        </div>
        <div className="task-body task-body-2">
            <div className="container">
                <div className="task-block">
                    <h4><strong>{res.map((r, index) => (index + 1 === res.length) ? defRes(r) : defRes(r) + ", " )}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>I have <strong>{task.tutoring.kids}</strong> kids with school grades <strong>{task.tutoring.grades}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>Subjects are <strong>{task.tutoring.subjects}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>{transport}</h4>
                </div>
            </div>
        </div>
        </>
    )
}

export default TutorTemp
