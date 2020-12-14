import React, { useEffect, useState } from 'react';

const DogTemp = ({task}) => {
    const [friendly, setFriendly] = useState([]);

    useEffect(() => {
        if(task.dogwalking.friendly){
            setFriendly(checkSetter(task.dogwalking.friendly));
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

    const defFriendly = (t) => {
        if(t === 'kids'){
            return 'kids';
        } else if(t === 'strangers'){
            return 'strangers';
        } else if(t === 'other'){
            return 'other dogs';
        } else if(t === 'not'){
            return 'not friendly';
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
                    <h4>I have <strong>{task.dogwalking.dogs}</strong>, ages <strong>{task.dogwalking.ages}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>walk location is <strong>{task.dogwalking.walkLocation}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>the length of the walk is <strong>{task.dogwalking.length}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>dog sizes are <strong>{task.dogwalking.sizes}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>dogs are friendly with <strong>{friendly.map((r, index) => (index + 1 === friendly.length) ? defFriendly(r) : defFriendly(r) + ", " )}</strong></h4>
                </div>
            </div>
        </div>
        </>
    )
}

export default DogTemp
