import selectableEntityUseCases from "./selectableEntityUseCases";

const presetUseCases = (options) => {
    const preset = selectableEntityUseCases(true, options);

    const set = (value) => {
        preset.set(value);
    };

    const add = (value) => {
        preset.add(value);
    };

    const remove = (value) => {
        preset.remove(value);
    };

    const has = (value) => {
        return preset.has(value);
    };

    const rename = (oldValue, newValue) => {
        preset.rename(oldValue, newValue);
    };

    const subscribe = (key, updateCallback, immediateCallbackCall) => {
        preset.subscribe(key, updateCallback, immediateCallbackCall);
    };

    const unsubscribe = (key) => {
        preset.unsubscribe(key);
    };

    const subscribeToCollection = (key, updateCallback, immediateCallbackCall) => {
        preset.subscribeToCollection(key, updateCallback, immediateCallbackCall);
    };

    const unsubscribeFromCollection = (key) => {
        preset.unsubscribeFromCollection(key);
    };

    return Object.freeze({
        set,
        subscribe,
        unsubscribe,
        subscribeToCollection,
        unsubscribeFromCollection,
        add,
        remove,
        has,
        rename,
    });
};

export default presetUseCases;