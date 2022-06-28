import {useEffect, useState} from "react";

const useSubscribe = (entityController, isNeededInitialData=true) => {

    const [entityValue, setEntityValue] = useState(null);

    useEffect(() => {
        const subscriberKey = Symbol();
        entityController.subscribe(subscriberKey, setEntityValue, isNeededInitialData);

        return () => {
            entityController.unsubscribe(subscriberKey);
        };
    }, [entityController]);

    return [entityValue];
};

export default useSubscribe;