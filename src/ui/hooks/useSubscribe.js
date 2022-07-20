import {useEffect, useState} from "react";

const useSubscribe = (subscribe,unsubscribe, isNeededInitialData=true) => {

    const [entityValue, setEntityValue] = useState(null);

    useEffect(() => {
        const subscriberKey = Symbol();
        subscribe(subscriberKey, setEntityValue, isNeededInitialData);

        return () => {
            unsubscribe(subscriberKey);
        };
    }, [subscribe, unsubscribe]);

    return [entityValue];
};

export default useSubscribe;