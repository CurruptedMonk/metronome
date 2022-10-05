import {range, RANGE_VALIDATION_STATUS} from "../domain/selectionCollection/range/range";
import rangeEntity from "../domain/entity/rangeEntity/rangeEntity";

const rangeEntityUseCases = (options) => {
    const entityRange = range(options.range);
    if (!entityRange.valueValidation(options.initialValue) === RANGE_VALIDATION_STATUS.PASSED) {
        throw new Error("Invalid initial value was passed");
    }
    const entity = rangeEntity(options.initialValue);

    const strategy = (action, value, validationStatus) => {
        const possibleOptions = {
            [RANGE_VALIDATION_STATUS.PASSED]: () => action(value),
            [RANGE_VALIDATION_STATUS.FAILED.LESS_RANGE]: () => action(options.range.from),
            [RANGE_VALIDATION_STATUS.FAILED.MORE_RANGE]: () => action(options.range.to),
            [RANGE_VALIDATION_STATUS.FAILED.INVALID]: () => throw new Error("Invalid value was passed"),
        };

        const optionKey = validationStatus(value);
        possibleOptions[optionKey]();
    };

    const set = (value) => {
        strategy(
            entity.set,
            value,
            entityRange.valueValidation(value)
        );
    };

    const increaseBy = (step) => {
        strategy(
            entity.increaseBy,
            step,
            entity.increaseStepValidation(step, entityRange.valueValidation)
        );
    };

    const decreaseBy = (step) => {
        strategy(
            entity.decreaseBy,
            step,
            entity.decreaseStepValidation(step, entityRange.valueValidation)
        );
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