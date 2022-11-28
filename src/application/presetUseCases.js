import selectableEntityUseCases from "./selectableEntityUseCases";

const presetUseCases = (options, storage) => {
    const presetName = {
        current: storage.download("current_preset_name") || options.initialValue
    };

    const presetCollection = {
        current: storage.download("preset_collection") || options.available
    };

    const preset = selectableEntityUseCases(
        true,
        {
            available: presetCollection.current,
            initialValue:presetName.current
        }
    );

    const presetNameProxy = new Proxy(presetName, {
        set: function(target, property, value) {
            target[property] = value;
            storage.save("current_preset_name", value);
            return true;
        }
    });

    const presetCollectionProxy = new Proxy(presetCollection, {
        set: function(target, property, value) {
            target[property] = value;
            storage.save("preset_collection", value);
            return true;
        }
    });

    preset.subscribe(Symbol(), (value) => presetNameProxy.current = value);
    preset.subscribeToCollection(Symbol(), (collection) => presetCollectionProxy.current = collection);

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