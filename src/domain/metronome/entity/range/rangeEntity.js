import settableEntity from "../settable/settableEntity";

const rangeEntity = (initialValue, rangeChecker) => {
    const { set, checker, subscribe, unsubscribe } = settableEntity(
        initialValue,
        rangeChecker
    );
    let value = initialValue;
    const getUpdatedValue = (newValue) => value = newValue;
    subscribe(Symbol(), getUpdatedValue);

    const increaseBy = (step) => {
        set(value + step);
    };

    const decreaseBy = (step) => {
        set(value - step);
    };

    const checkIncreaseStep = (step) => {
        return checker(value + step);
    };

    const checkDecreaseStep = (step) => {
        return checker(value - step);
    };

    return Object.freeze({
        set,
        checker,
        checkIncreaseStep,
        checkDecreaseStep,
        increaseBy,
        decreaseBy,
        subscribe,
        unsubscribe,
    });
};

export default rangeEntity;