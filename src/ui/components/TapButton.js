import React, {useRef} from "react";
import {Button} from "antd";
import onTap from "../handlers/onTap";
import useWindowListener from "../hooks/useWindowListener";
import onKeyBoard from "../handlers/onKeyboard";

const TapButton = ({controller, keyBoardKeys}) => {
    const buttonRef = useRef(null);
    const buttonCallback = () => buttonRef.current.click();

    useWindowListener("keydown", onKeyBoard.bind(null, buttonCallback, keyBoardKeys));

    return (
        <Button
            ref={buttonRef}
            type="primary"
            size={"large"}
            onClick={() => onTap(controller.set)}
        >
            Tap BPM
        </Button>
    );
};

export default TapButton;