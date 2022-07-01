import React from "react";
import useSubscribe from "../../../hooks/useSubscribe";

const CheckboxedButtonDecorator = ({
    Component,
    controller,
    activeProps,
    notActiveProps,
}) => {
    const [isActive] = useSubscribe(controller);
    const checkboxedProps = isActive ? activeProps : notActiveProps;

    return React.cloneElement(Component, {
        ...checkboxedProps,
    });
};

export default CheckboxedButtonDecorator;
