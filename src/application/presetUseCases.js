import selectableEntityUseCases from "./selectableEntityUseCases";
import debounce from "../lib/debounce";
import storageUseCases from "./storageUseCases";

const presetUseCases = (options, storage) => {
    const DEBOUNCE_TIMEOUT_MS = 600;
    const currentPresetNameStorage = storageUseCases(storage,"current_preset_name");
    const presetCollectionStorage = storageUseCases(storage,"preset_collection");
    const saveCurrentPresetName = debounce(currentPresetNameStorage.save, DEBOUNCE_TIMEOUT_MS);
    const savePresetCollection = debounce(presetCollectionStorage.save, DEBOUNCE_TIMEOUT_MS);

    const preset = selectableEntityUseCases(
        true,
        {
            available: presetCollectionStorage.download() || options.available,
            initialValue:currentPresetNameStorage.download() || options.initialValue
        }
    );

    preset.subscribe(Symbol(), (presetName) => saveCurrentPresetName(presetName));
    preset.subscribeToCollection(Symbol(), (collection) => savePresetCollection(collection));

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