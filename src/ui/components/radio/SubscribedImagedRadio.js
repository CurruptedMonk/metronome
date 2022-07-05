import React from "react";
import { Radio } from "antd";
import useSubscribe from "../../hooks/useSubscribe";

const SubscribedImagedRadio = ({ controller, available }) => {
    const [duration] = useSubscribe(controller);

    return (
        <>
            {available.map((value) => (
                <Radio.Button
                    className="imaged-radio"
                    checked={value === duration}
                    key={value}
                    value={value}
                    onChange={(e) => controller.set(parseInt(e.target.value))}
                >
                    <img
                        src={`./images/${value}.jpg`}
                        className="image-full"
                        alt={`Duration ${value}`}
                    />
                </Radio.Button>
            ))}
        </>
    );
};

export default SubscribedImagedRadio;
