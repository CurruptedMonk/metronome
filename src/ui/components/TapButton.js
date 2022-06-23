import React from "react";
import {Button} from "antd";
import onTap from "../handlers/onTap";

const TapButton = ({controller}) => {
    return (
        <Button type="primary"
                size={"large"}
                onClick={() => onTap(controller.bpm.set)}
        >
            Tap BPM
        </Button>
    );
};

export default TapButton;