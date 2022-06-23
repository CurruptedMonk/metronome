import React, {useEffect, useState} from "react";
import {Radio} from 'antd';

const Duration = ({controller, durationOptions}) => {
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const subscriberKey = Symbol();
        controller.duration.subscribe(subscriberKey, setDuration, true);

        return () => {
            controller.duration.unsubscribe(subscriberKey);
        };
    }, [controller]);

    return (
        <div style={{display:"flex",justifyContent: "center", textAlign: "center"}}>
            {durationOptions.available.map((value) => (
                    <Radio.Button
                        style={{width: "6rem", height: "5rem", margin: "0 .2rem"}}
                        checked={value === duration}
                        key={value}
                        value={value}
                        onChange={(e) => controller.duration.set(parseInt(e.target.value))}
                    >
                        <img src={`./images/${value}.jpg`} style={{height: "100%", width: "100%"}} alt={`Duration ${value}`}/>
                    </Radio.Button>
                )
            )}
        </div>
    );
};

export default Duration;