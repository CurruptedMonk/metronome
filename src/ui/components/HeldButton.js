import React from "react";
import { Button } from "antd";
import onHeld from "../handlers/onHeld";

const HeldButton = ({ callback, heldDelay, ...props }) => {
    const handler = (e) => onHeld(e, callback, heldDelay);

    return <Button {...props} onMouseDown={handler} />;
};

export default HeldButton;
