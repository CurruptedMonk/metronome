import React from "react"
import useSubscribe from "../../hooks/useSubscribe";

const SubscribedValue = ({ controller, ...props }) => {
    const [value] = useSubscribe(controller);

    return <span {...props}>{value}</span>;
};

export default SubscribedValue;