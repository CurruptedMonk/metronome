import React from "react";
import { Slider } from "antd";
import useSubscribe from "../hooks/useSubscribe";

const SubscribedSlider = ({ controller, ...props }) => {
    const [value] = useSubscribe(controller);

    return (
        <Slider
            tooltipVisible={false}
            value={value}
            onChange={(value) => controller.set(parseInt(value))}
            {...props}
        />
    );
};

export default SubscribedSlider;
