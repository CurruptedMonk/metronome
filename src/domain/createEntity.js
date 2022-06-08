import createObserver from "../lib/createObserver";

const createEntity = (initialValue, checker, type="SETTABLE") => {
    if(type === "RANGE" && !Number.isFinite(initialValue)) {
        throw new Error("For RANGE type value should be a number!");
    }
    if(!checker(initialValue)) throw new Error("Invalid initial value!");

    const observer = createObserver();
    let value = initialValue;

    const set = (newValue) => {
        if(checker(newValue) && newValue !== value) {
            value = newValue;
            observer.notify(value);
        }
    };

    const increaseBy = (step) => {
        if(!Number.isFinite(step)) throw new Error("Step should be a number");
        set(value + step);
    };

    const decreaseBy = (step) => {
        if(!Number.isFinite(step)) throw new Error("Step should be a number");
        set(value - step);
    };

    const subscribe = (key, getUpdateCallback, isNeedValueForInit) => {
        observer.subscribe(key,getUpdateCallback);
        if(isNeedValueForInit) {
            getUpdateCallback(value);
        }
    };

    const unsubscribe = (key) => {
        observer.unsubscribe(key);
    };

    const api = {
        SETTABLE: {set, subscribe, unsubscribe},
        RANGE : {set, subscribe, unsubscribe, increaseBy, decreaseBy},
    };

    return api[type] || throw new Error("Invalid api type!");
};

export default createEntity;