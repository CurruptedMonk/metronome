import React, {useEffect} from "react";
import createSubscriberKeys from "../../application/createSubscriberKeys";
import useEntityReducer from "../hooks/useEntityReducer";

const MetronomeHeader = ({entities}) => {
    const [state, setState] = useEntityReducer(entities);

    useEffect(() => {
        const subscriberKeys = createSubscriberKeys(entities);
        for(const [name, entity] of Object.entries(entities)) {
            entity.subscribe(
                subscriberKeys[name],
                setState.bind(null, name),
                true
            );
        }

        return () => {
            for (const [name, entity] of Object.entries(entities)) {
                entity.unsubscribe(subscriberKeys[name]);
            }
        }
    }, [entities]);

    return (
        <div style={{display:"flex",justifyContent: "center", textAlign: "center", flexDirection: "column", fontSize:"2rem"}}>
            <div>{state.bpm} BPM</div>
            <div>{state.beat}/{state.duration}</div>
        </div>
    );
};

export default MetronomeHeader;