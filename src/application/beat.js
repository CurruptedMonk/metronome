import createBeat from "../domain/derivedEntities/beat/createBeat";

const beat = (options) => {
    const beat = createBeat(options.initialValue, options.range);

    const set = (value) => {
        if(beat.checkValue(value)) {
            beat.set(value);
        }
    };

    const increaseBy = (step) => {
        if(beat.checkIncreaseStep(step)) {
            beat.increaseBy(step);
        }
    };

    const decreaseBy = (step) => {
        if(beat.checkDecreaseStep(step)) {
            beat.decreaseBy(step);
        }
    };

    const subscribe = (key, getUpdateCallback, isNeedValueForInit) => {
        beat.subscribe(key, getUpdateCallback, isNeedValueForInit);
    };

    const unsubscribe = (key) => {
        beat.unsubscribe(key);
    };

    return Object.freeze({
        set,
        increaseBy,
        decreaseBy,
        subscribe,
        unsubscribe
    });
};

export default  beat;