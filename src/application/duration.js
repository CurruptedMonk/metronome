import createDuration from "../domain/derivedEntities/duration/createDuration";

const duration = (options) => {
    const duration = createDuration(options.initialValue, options.available);

    const set = (value) => {
        if(duration.checkValue(value)) {
            duration.set(value);
        }
    };

    const subscribe = (key, getUpdateCallback, isNeedValueForInit) => {
        duration.subscribe(key, getUpdateCallback, isNeedValueForInit);
    };

    const unsubscribe = (key) => {
        duration.unsubscribe(key);
    };

    return Object.freeze({
        set,
        subscribe,
        unsubscribe
    });
};

export default duration;