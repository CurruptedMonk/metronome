import {range, RANGE_VALIDATION_STATUS} from "../domain/selectionCollection/range/range";
import rangeEntity from "../domain/entity/rangeEntity/rangeEntity";

const rangeEntityUseCases = (options) => {
    const entityRange = range(options.range);
    if (!entityRange.valueValidationStatus(options.initialValue) === RANGE_VALIDATION_STATUS.PASSED) {
        throw new Error("Invalid initial value was passed");
    }
    const entity = rangeEntity(options.initialValue);

    const set = (value) => {
        const strategy = {
            [RANGE_VALIDATION_STATUS.PASSED]: () => entity.set(value),
            [RANGE_VALIDATION_STATUS.FAILED.LESS_RANGE]: () => entity.set(options.range.from),
            [RANGE_VALIDATION_STATUS.FAILED.MORE_RANGE]: () => entity.set(options.range.to),
            [RANGE_VALIDATION_STATUS.FAILED.INVALID]: () => throw new Error("Trying to set invalid value"),
        };

        const validationStatus = entityRange.valueValidationStatus(value);
        strategy[validationStatus]();
    };

    const increaseBy = (step) => {
        const strategy = {
            [RANGE_VALIDATION_STATUS.PASSED]: () => entity.increaseBy(step),
            [RANGE_VALIDATION_STATUS.FAILED.LESS_RANGE]: () => entity.set(options.range.from),
            [RANGE_VALIDATION_STATUS.FAILED.MORE_RANGE]: () => entity.set(options.range.to),
            [RANGE_VALIDATION_STATUS.FAILED.INVALID]: () => throw new Error("Trying to increase by invalid value"),
        };

        const validationStatus = entity.increaseStepValidationStatus(step, entityRange.valueValidationStatus);
        strategy[validationStatus]();
    };

    const decreaseBy = (step) => {
        const strategy = {
            [RANGE_VALIDATION_STATUS.PASSED]: () => entity.decreaseBy(step),
            [RANGE_VALIDATION_STATUS.FAILED.LESS_RANGE]: () => entity.set(options.range.from),
            [RANGE_VALIDATION_STATUS.FAILED.MORE_RANGE]: () => entity.set(options.range.to),
            [RANGE_VALIDATION_STATUS.FAILED.INVALID]: () => throw new Error("Trying to decrease by invalid value"),
        };

        const validationStatus = entity.decreaseStepValidationStatus(step, entityRange.valueValidationStatus);
        strategy[validationStatus]();
    };

    const subscribe = (key, updateCallback, immediateCallbackCall) => {
        entity.subscribe(key, updateCallback, immediateCallbackCall);
    };

    const unsubscribe = (key) => {
        entity.unsubscribe(key);
    };

    return Object.freeze({
        set,
        increaseBy,
        decreaseBy,
        subscribe,
        unsubscribe
    });
};

export default rangeEntityUseCases;