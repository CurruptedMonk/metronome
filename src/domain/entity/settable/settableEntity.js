import createObserver from "../../../lib/createObserver";

const settableEntity = (initialValue, checker) => {
    if(!checker(initialValue)) throw new Error("Invalid initial value was passed!");

    const observer = createObserver();
    let value = initialValue;

    const set = (newValue) => {
        if(checker(newValue) && newValue !== value) {
            value = newValue;
            observer.notify(value);
        }
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
            subscribe,
            unsubscribe
        }
    );
};

export default settableEntity;