import createBeat from "../../domain/metronome/derivedEntities/beat/createBeat";
import VALIDATION_STATUS from "../../domain/metronome/entity/VALIDATION_STATUS";

const appBeat = (options) => {
    const beat = createBeat(options.initialValue, options.range);

    const set = (value) => {
        if(beat.checker(value) === VALIDATION_STATUS.PASSED) {
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

export default  appBeat;