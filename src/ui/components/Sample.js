import React, {useEffect, useState} from "react";
import {Select} from "antd";
const {Option} = Select;

const Sample = ({name, sampleController, sampleOptions}) => {
    const [sound, setSound] = useState("");

    useEffect(() => {
        const subscriberKey = Symbol();
        sampleController.subscribe(subscriberKey, setSound, true);

        return () => {
            sampleController.unsubscribe(subscriberKey);
        };
    }, [sampleController]);

    return (
        <div style={{display:"flex",justifyContent: "center", textAlign: "center"}}>
            <span style={{fontSize: "1.2rem", margin: "0 .5rem"}}>{name}</span>
            <Select style={{width: "8rem", fontSize: "1.2rem"}} value={sound} onChange={(value) => {
                sampleController.set(value);
            }}>
                {sampleOptions.available.map((sound) => (
                    <Option style={{fontSize: "1.2rem"}} key={sound}>
                        {sound}
                    </Option>
                ))}
            </Select>
        </div>
    );
};

export default Sample;