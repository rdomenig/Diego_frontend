import React from 'react';

const PickupTemp = ({task}) => {
    const tConvert = (time) => {
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) {
          time = time.slice (1);
          time[5] = +time[0] < 12 ? 'am' : 'pm';
          time[0] = +time[0] % 12 || 12;
        }
        return time.join ('');
    }

    const defTrans = (res) => {
        if(res === 'personalcar'){
            return 'personal car';
        } else if(res === 'uber'){
            return 'Uber';
        } else if(res === 'publictransport'){
            return 'public transport';
        }
    }

    const defRefund = (res) => {
        if(res === 'beforetask'){
            return 'refund will be given before task';
        } else if(res === 'aftertask'){
            return 'refund will be given after task';
        } else if(res === 'norefund'){
            return 'no refund involved';
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
                    <h4>Transport <strong>{task.pickup.people}</strong> people to <strong>{task.pickup.dropoff}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>using <strong>{defTrans(task.transportation)}</strong></h4>
                </div>
                <div className="task-block">
                    <h4>{defRefund(task.pickup.refund)}</h4>
                </div>
            </div>
        </div>
        </>
    )
}

export default PickupTemp
