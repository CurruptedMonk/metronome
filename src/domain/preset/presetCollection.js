import createObserver from "../../lib/createObserver";

const presetCollection = (defaultPresets= []) => {
    const observer = createObserver();
    let available = new Set([...defaultPresets]);

    const add = (preset) => {
        available.add(preset);
        observer.notify([...available]);
    };

    const getFirst = () => {
        if (available.size > 0) return [...available][0];
    };

    const remove = (preset) => {
        available.delete(preset);
        observer.notify([...available]);
    };

    const has = (preset) => {
        return available.has(preset);
    };

    const edit = (oldValue, newValue) => {
        if(!has(newValue) && oldValue !== newValue)  {
            const collection = [...available];
            const index = collection.indexOf(oldValue);
            if (index !== -1) collection[index] = newValue;
            available = new Set([...collection]);
            observer.notify([...available]);
        }
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
        edit,
        getFirst,
        subscribe,
        unsubscribe,
    });
};

export default presetCollection;