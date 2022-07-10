import React, { useRef } from "react";
import useWindowListener from "../../hooks/useWindowListener";
import onKeyBoard from "../../handlers/onKeyboard";
import partial from "../../../lib/partial";

const KeyboardControlledButtonDecorator = ({
    Component,
    keyboardEvent,
    keyboardKeys,
}) => {
    const buttonRef = useRef(null);
    const buttonCallback = () => buttonRef.current.click();

    useWindowListener(
        keyboardEvent,
        partial(onKeyBoard, buttonCallback, keyboardKeys)
    );

    return React.cloneElement(Component, {
        ref: buttonRef,
    });
};

export default KeyboardControlledButtonDecorator;
