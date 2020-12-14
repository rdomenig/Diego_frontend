import React, { useEffect, useState } from 'react';

const PetTemp = ({task, transport}) => {
    const [res, setRes]= useState([]);

    useEffect(() => {
        if(task.petsitting.responsibilities){
            setRes(checkSetter(task.petsitting.responsibilities));
        }
    }, [task.petsitting.responsibilities])

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
    console.log(task)

    const defSitting = (sitting) => {
        if(sitting === 'overnight'){
            return 'overnight stay';
        } else if(sitting === 'regular'){
            return 'regular check-ins';
        } else if(sitting === 'sitting'){
            return 'sitting at sitter\'s home';
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
                    <h4><strong>{task.location}</strong></h4>
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
                    <h4><strong>{res.map((r, index) => (index + 1 === res.length) ? r : r + ", " )}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>I have <strong>{task.petsitting.dogs ? task.petsitting.dogs + ' dogs, ' : ''} {task.petsitting.cats ? task.petsitting.cats + ' cats, ' : ''} {task.petsitting.others ? task.petsitting.others : ''}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>the breeds are <strong>{task.petsitting.breed}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>they must be fed <strong>{task.petsitting.fedDay}</strong> times a day</h4>
                </div>
                <div className="task-block">
                    <h4>they must be walked <strong>{task.petsitting.walkedDay}</strong> times a day</h4>
                </div>
                <div className="task-block">
                    <h4>the sitting requires <strong>{defSitting(task.petsitting.sittingType)}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>{transport}</h4>
                </div>
            </div>
        </div>
        </>
    )
}

export default PetTemp
