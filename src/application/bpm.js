import createBpm from "../domain/derivedEntities/bpm/createBpm";

const bpm = (options) => {
    const bpm = createBpm(options.initialValue, options.range);

    const set = (value) => {
        if(bpm.checkValue(value)) {
            bpm.set(value);
        }
    };

    const increaseBy = (step) => {
        if(bpm.checkIncreaseStep(step)) {
            bpm.increaseBy(step);
        }
    };

    const decreaseBy = (step) => {
        if(bpm.checkDecreaseStep(step)) {
            bpm.decreaseBy(step);
        }
    };

    const subscribe = (key, getUpdateCallback, isNeedValueForInit) => {
        bpm.subscribe(key, getUpdateCallback, isNeedValueForInit);
    };

    const unsubscribe = (key) => {
        bpm.unsubscribe(key);
    };

    return Object.freeze({
        set,
        increaseBy,
        decreaseBy,
        subscribe,
        unsubscribe
    });
};

export default bpm;