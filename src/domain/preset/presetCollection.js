import createObserver from "../../lib/createObserver";

const presetCollection = (defaultPresets= []) => {
    const observer = createObserver();
    const available = new Set([...defaultPresets]);

    const add = (preset) => {
        available.add(preset);
        observer.notify([...available]);
    };

    const remove = (preset) => {
        available.delete(preset);
        observer.notify([...available]);
    };

    const has = (preset) => {
        return available.has(preset);
    };

    const subscribe = (key, getUpdateCallback, isNeedValueForInit = false) => {
        observer.subscribe(key, getUpdateCallback);
        if (isNeedValueForInit) {
            getUpdateCallback([...available]);
        }
    };

    const unsubscribe = (key) => {
        observer.unsubscribe(key);
    };

    return Object.freeze({
        add,
        remove,
        has,
        subscribe,
        unsubscribe,
    });
};

export default presetCollection;