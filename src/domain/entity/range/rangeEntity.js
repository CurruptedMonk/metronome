import settableEntity from "../settable/settableEntity";

const rangeEntity = (initialValue, checker) => {
    const {set, checkValue, subscribe, unsubscribe} = settableEntity(initialValue, checker);
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
        return checkValue(value + step);
    };

    const checkDecreaseStep = (step) => {
        return checkValue(value - step);
    };

    return Object.freeze(
        {
            set,
            checkValue,
            checkIncreaseStep,
            checkDecreaseStep,
            increaseBy,
            decreaseBy,
            subscribe,
            unsubscribe
        }
    );
};

export default rangeEntity;