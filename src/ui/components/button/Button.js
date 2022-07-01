import { Button as AntdButton } from "antd";
import React, { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
    return (
        <AntdButton ref={ref} {...props}>
            {props.text || props.children}
        </AntdButton>
    );
});

export default Button;
