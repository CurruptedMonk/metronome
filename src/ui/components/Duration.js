import React from "react";
import {Radio} from 'antd';
import useSubscribe from "../hooks/useSubscribe";

const Duration = ({controller, durationOptions}) => {

    const [duration] = useSubscribe(controller.duration);

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