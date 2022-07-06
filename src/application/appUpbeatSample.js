import createSample from "../domain/derivedEntities/sample/createSample";
import VALIDATION_STATUS from "../domain/entity/VALIDATION_STATUS";

const appUpbeatSample = (options) => {
    const sample = createSample(options.initialValue, options.available);

    const set = (value) => {
        if (sample.checker(value) === VALIDATION_STATUS.PASSED) {
            sample.set(value);
        }
    };

    const subscribe = (key, getUpdateCallback, isNeedValueForInit) => {
        sample.subscribe(key, getUpdateCallback, isNeedValueForInit);
    };

    const unsubscribe = (key) => {
        sample.unsubscribe(key);
    };

    return Object.freeze({
        set,
        subscribe,
        unsubscribe
    });
};

export default appUpbeatSample;