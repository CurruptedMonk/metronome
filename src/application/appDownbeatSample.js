import createSample from "../domain/derivedEntities/sample/createSample";

const appDownbeatSample = (options) => {
    const sample = createSample(options.initialValue, options.available);

    const set = (value) => {
        if(sample.checkValue(value)) {
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