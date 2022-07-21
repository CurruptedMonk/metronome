import React from "react"
import useSubscribe from "../../hooks/useSubscribe";

const SubscribedValue = ({ subscribe, unsubscribe, ...props }) => {
    const [value] = useSubscribe(subscribe, unsubscribe);

    return <span {...props}>{value}</span>;
};

export default SubscribedValue;