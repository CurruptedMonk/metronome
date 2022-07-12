import createSample from "../domain/metronome/derivedEntities/sample/createSample";
import VALIDATION_STATUS from "../domain/metronome/entity/VALIDATION_STATUS";

const appDownbeatSample = (options) => {
    const sample = createSample(options.initialValue, options.available);

    const set = (value) => {
        if(sample.checker(value) === VALIDATION_STATUS.PASSED) {
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

export default appDownbeatSample;