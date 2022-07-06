import createBpm from "../domain/derivedEntities/bpm/createBpm";
import VALIDATION_STATUS from "../domain/entity/VALIDATION_STATUS";

const appBpm = (options) => {
    const bpm = createBpm(options.initialValue, options.range);

    const set = (value) => {
        switch (bpm.checker(value)) {
            case VALIDATION_STATUS.PASSED:
                bpm.set(value);
                break;
            case VALIDATION_STATUS.FAILED.LESS:
                bpm.set(options.range.from);
                break;
            case VALIDATION_STATUS.FAILED.MORE:
                bpm.set(options.range.to);
                break;
            default:
        }
    }
    
    const increaseBy = (step) => {
        switch (bpm.checkIncreaseStep(step)) {
            case VALIDATION_STATUS.PASSED:
                bpm.increaseBy(step);
                break;
            case VALIDATION_STATUS.FAILED.MORE:
                bpm.set(options.range.to);
                break;
            default:
        }
    };

    const decreaseBy = (step) => {
        switch (bpm.checkDecreaseStep(step)) {
            case VALIDATION_STATUS.PASSED:
                bpm.decreaseBy(step);
                break;
            case VALIDATION_STATUS.FAILED.LESS:
                bpm.set(options.range.from);
                break;
            default:
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

export default appBpm;