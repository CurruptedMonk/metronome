import presetCollection from "../../domain/preset/presetCollection";
import domainPreset from "../../domain/preset/preset";

const appPreset = () => {
    const presets = presetCollection();
    const preset = domainPreset(presets);

    const add = (preset) => {
        presets.add(preset);
        set(preset);
    };

    const remove = (preset) => {
        presets.remove(preset);
        const first = presets.getFirst();
        if (first) set(first);
    };

    const has = (preset) => {
        return presets.has(preset);
    };

    const rename = (oldPreset, newPreset) => {
        presets.edit(oldPreset, newPreset);
    };

    const set = (name) => {
        if(has(name)) {
            preset.set(name);
        }
    };

    const subscribeToValue = (key, getUpdateCallback, isNeedValueForInit) => {
        preset.subscribe(key, getUpdateCallback, isNeedValueForInit);
    };

    const unsubscribeFromValue = (key) => {
        preset.unsubscribe(key);
    };

    const subscribeToCollection = (key, getUpdateCallback, isNeedValueForInit) => {
        presets.subscribe(key, getUpdateCallback, isNeedValueForInit);
    };

    const unsubscribeFromCollection = (key) => {
        presets.unsubscribe(key);
    };

    return Object.freeze({
        add,
        remove,
        has,
        rename,
        set,
        subscribeToValue,
        unsubscribeFromValue,
        subscribeToCollection,
        unsubscribeFromCollection
    });
};

export default appPreset;