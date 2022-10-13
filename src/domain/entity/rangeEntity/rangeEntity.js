import selectableEntity from "../selectableEntity/selectableEntity";

const rangeEntity = (initialValue) => {

    const {set, subscribe, unsubscribe} = selectableEntity(
        initialValue
    );
    let value = initialValue;
    subscribe(Symbol(), (newValue) => value = newValue);

    const increaseBy = (step) => {
        set(value + step);
    };

    const decreaseBy = (step) => {
        set(value - step);
    };

    const increaseStepValidationStatus = (step, valueValidationStatus) => {
        return valueValidationStatus(value + step);
    };

    const decreaseStepValidationStatus = (step, valueValidationStatus) => {
        return valueValidationStatus(value - step);
    };

    return Object.freeze({
        set,
        increaseBy,
        decreaseBy,
        subscribe,
        unsubscribe,
        increaseStepValidationStatus,
        decreaseStepValidationStatus
    });
};

export default rangeEntity;

