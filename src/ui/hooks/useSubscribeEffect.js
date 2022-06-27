import {useEffect} from "react";

const useSubscribeEffect = (entityController,updateCallback, isNeededInitialData) => {
    useEffect(() => {
        const subscriberKey = Symbol();
        entityController.subscribe(subscriberKey, updateCallback, isNeededInitialData);

        return () => {
            entityController.unsubscribe(subscriberKey);
        };
    }, [entityController]);
};

export default useSubscribeEffect;