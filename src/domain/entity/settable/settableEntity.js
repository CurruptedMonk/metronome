import createObserver from "../../../lib/createObserver";
import VALIDATION_STATUS from "../VALIDATION_STATUS";

const settableEntity = (initialValue, checker) => {
    if (checker(initialValue) !== VALIDATION_STATUS.PASSED)
        throw new Error("Invalid initial value was passed!");

    const observer = createObserver();
    let value = initialValue;

    const set = (newValue) => {
        if (checkValue(newValue)) {
            value = newValue;
            observer.notify(value);
        }
    };

    const checkValue = (newValue) => {
        return (
            newValue !== value && checker(newValue) === VALIDATION_STATUS.PASSED
        );
    };

    const subscribe = (key, getUpdateCallback, isNeedValueForInit = false) => {
        observer.subscribe(key, getUpdateCallback);
        if (isNeedValueForInit) {
            getUpdateCallback(value);
        }
    };

    const unsubscribe = (key) => {
        observer.unsubscribe(key);
    };

    return Object.freeze({
        set,
        checker,
        subscribe,
        unsubscribe,
    });
};

export default settableEntity;
