import settableEntity from "../settable/settableEntity";

const rangeEntity = (initialValue, checker) => {
    const {set, subscribe, unsubscribe} = settableEntity(initialValue, checker);
    let value = initialValue;
    const getUpdatedValue = (newValue) => value = newValue;
    subscribe(Symbol(), getUpdatedValue);

    const increaseBy = (step) => {
        set(value + step);
    };

    const decreaseBy = (step) => {
        set(value - step);
    };

    return Object.freeze(
        {
            set,
            increaseBy,
            decreaseBy,
            subscribe,
            unsubscribe
        }
    );
};

export default rangeEntity;