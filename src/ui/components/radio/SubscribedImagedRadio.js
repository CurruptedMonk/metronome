import React from "react";
import { Radio } from "antd";
import useSubscribe from "../../hooks/useSubscribe";

const SubscribedImagedRadio = ({ controller, available }) => {
    const [duration] = useSubscribe(controller);

    return (
        <>
            {available.map((value) => (
                <Radio.Button
                    style={{ width: "6rem", height: "5rem", margin: "0 .2rem" }}
                    checked={value === duration}
                    key={value}
                    value={value}
                    onChange={(e) => controller.set(parseInt(e.target.value))}
                >
                    <img
                        src={`./images/${value}.jpg`}
                        style={{ height: "100%", width: "100%" }}
                        alt={`Duration ${value}`}
                    />
                </Radio.Button>
            ))}
        </>
    );
};

export default SubscribedImagedRadio;
