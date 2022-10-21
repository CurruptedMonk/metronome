import createObserver from "../../../lib/createObserver";

const available = (defaultValues) => {
    const observer = createObserver();
    let collection = new Set([...defaultValues]);

    const add = (value) => {
        collection.add(value);
        observer.notify([...collection]);
    };

    const remove = (value) => {
        collection.delete(value);
        observer.notify([...collection]);
    };

    const has = (value) => {
        return collection.has(value);
    };

    const rename = (oldValue, newValue) => {
        if(isSuitableForEditing(oldValue, newValue)) {
            const collectionCopy = [...collection];
            const oldValueIndex = collectionCopy.indexOf(oldValue);
            collectionCopy[oldValueIndex] = newValue;
            collection = new Set([...collectionCopy]);
            observer.notify([...collection]);
        }
    };

    const isSuitableForEditing = (oldValue, newValue) => {
        return !has(newValue) && has(oldValue) && newValue !== oldValue;
    };

    const getFirst = () => {
        if(!isEmpty()) return [...collection][0];
    };

    const isEmpty = () => {
        return collection.size === 0;
    };

    const subscribe = (key, updateCallback, immediateCallbackCall = false) => {
        observer.subscribe(key, updateCallback);
        if (immediateCallbackCall) {
            updateCallback([...collection]);
        }
    };

    const unsubscribe = (key) => {
        observer.unsubscribe(key);
    };

    return Object.freeze({
        add,
        remove,
        has,
        rename,
        isEmpty,
        getFirst,
        subscribe,
        unsubscribe
    });
};

export default available;