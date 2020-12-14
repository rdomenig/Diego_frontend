import React, { useEffect, useState } from 'react';

const YardTemp = ({task, transport}) => {
    const [res, setRes]= useState([]);

    useEffect(() => {
        if(task.yardwork.responsibilities){
            setRes(checkSetter(task.yardwork.responsibilities));
        }
    }, [task.yardwork.responsibilities])

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
        if(res === 'gardening'){
            return 'gardening';
        } else if(res === 'cleaning'){
            return 'cleaning garage/shed';
        } else if(res === 'mowing'){
            return 'mowing';
        } else if(res === 'snowshoveling'){
            return 'snow shoveling';
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
                    <h4><strong>{res.map((r, index) => (index + 1 === res.length) ? defRes(r) : defRes(r) + ", " )}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>{task.yardwork.tools ? 'I will provide tools' : 'tools not provided'}</h4>
                </div>
                <div className="task-block">
                    <h4>{transport}</h4>
                </div>
            </div>
        </div>
        </>
    )
}

export default YardTemp
