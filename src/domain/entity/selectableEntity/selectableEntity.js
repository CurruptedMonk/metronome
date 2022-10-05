import createObserver from "../../../lib/createObserver";

const selectableEntity = (initialValue) => {
    const observer = createObserver();
    let value = initialValue;

    const set = (newValue) => {
        value = newValue;
        observer.notify(value);
    };

    const subscribe = (key, updateCallback, immediateCallbackCall = false) => {
        observer.subscribe(key, updateCallback);
        if (immediateCallbackCall) {
            updateCallback(value);
        }
    };

    const unsubscribe = (key) => {
        observer.unsubscribe(key);
    };

    return Object.freeze({
        set,
        subscribe,
        unsubscribe,
    });
};

export default selectableEntity;
