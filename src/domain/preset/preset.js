import createObserver from "../../lib/createObserver";

const domainPreset = () => {
    const observer = createObserver();
    let current;

    const set = (name) => {
        current = name;
        observer.notify(current);
    };

    const subscribe = (key, getUpdateCallback, isNeedValueForInit = false) => {
        observer.subscribe(key, getUpdateCallback);
        if (isNeedValueForInit) {
            getUpdateCallback(current);
        }
    };

    const unsubscribe = (key) => {
        observer.unsubscribe(key);
    };

    return Object.freeze({
        subscribe,
        unsubscribe,
        set
    });
};

export default domainPreset;

