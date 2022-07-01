import React from "react";
import useSubscribe from "../../../hooks/useSubscribe";
import cutChildren from "./helpers/cutChildren";

const CheckboxedButtonDecorator = ({
    controller,
    activeProps,
    notActiveProps,
    ...props
}) => {
    const [isActive] = useSubscribe(controller);
    const additionalProps = isActive ? activeProps : notActiveProps;
    const [children, propsWithoutChildren] = cutChildren(props);

    return React.cloneElement(children, {
        ...propsWithoutChildren,
        ...additionalProps,
    });
};

export default CheckboxedButtonDecorator;
