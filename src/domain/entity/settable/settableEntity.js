import createObserver from "../../../lib/createObserver";

const settableEntity = (initialValue, checker) => {
    if(!checker(initialValue)) throw new Error("Invalid initial value was passed!");

    const observer = createObserver();
    let value = initialValue;

    const set = (newValue) => {
        if(checkValue(newValue)) {
            value = newValue;
            observer.notify(value);
        }
    };

    const checkValue = (newValue) => {
        return checker(newValue) && newValue !== value;
    };

    const subscribe = (key, getUpdateCallback, isNeedValueForInit = false) => {
        observer.subscribe(key,getUpdateCallback);
        if(isNeedValueForInit) {
            getUpdateCallback(value);
        }
    };

    const unsubscribe  = (key) => {
        observer.unsubscribe(key);
    };

    return Object.freeze(
        {
            set,
            checkValue,
            subscribe,
            unsubscribe
        }
    );
};

export default settableEntity;