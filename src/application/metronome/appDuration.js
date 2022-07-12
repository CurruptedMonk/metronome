import createDuration from "../domain/metronome/derivedEntities/duration/createDuration";
import VALIDATION_STATUS from "../domain/metronome/entity/VALIDATION_STATUS";

const appDuration = (options) => {
    const duration = createDuration(options.initialValue, options.available);

    const set = (value) => {
        if(duration.checker(value) === VALIDATION_STATUS.PASSED) {
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

export default appDuration;