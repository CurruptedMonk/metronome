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

    const increaseStepValidation = (step, valueValidation) => {
        return valueValidation(value + step);
    };

    const decreaseStepValidation = (step, valueValidation) => {
        return valueValidation(value - step);
    };

    return Object.freeze({
        set,
        increaseBy,
        decreaseBy,
        subscribe,
        unsubscribe,
        increaseStepValidation,
        decreaseStepValidation
    });
};

export default rangeEntity;

