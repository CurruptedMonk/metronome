import React, { useRef } from "react";
import useWindowListener from "../../../hooks/useWindowListener";
import onKeyBoard from "../../../handlers/onKeyboard";
import cutChildren from "./helpers/cutChildren";

const KeyboardControlledButtonDecorator = ({
    keyboardEvent,
    keyboardKeys,
    ...props
}) => {
    const buttonRef = useRef(null);
    const buttonCallback = () => buttonRef.current.click();

    useWindowListener(
        keyboardEvent,
        onKeyBoard.bind(null, buttonCallback, keyboardKeys)
    );

    const [children, propsWithoutChildren] = cutChildren(props);

    return React.cloneElement(children, {
        ...propsWithoutChildren,
        ref: buttonRef,
    });
};

export default KeyboardControlledButtonDecorator;
