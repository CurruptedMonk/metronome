import settableEntity from "../settable/settableEntity";

const rangeEntity = (initialValue, checker) => {
    const {set, check, subscribe, unsubscribe} = settableEntity(initialValue, checker);
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
        return check(value + step);
    };

    const checkDecreaseStep = (step) => {
        return check(value - step);
    };

    return Object.freeze(
        {
            set,
            check,
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