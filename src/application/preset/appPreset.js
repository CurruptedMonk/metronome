import presetCollection from "../../domain/preset/presetCollection";

const appPreset = () => {
    const presets = presetCollection();

    const add = (preset) => {
        presets.add(preset);
    };

    const remove = (preset) => {
        presets.remove(preset);
    };

    const has = (preset) => {
        return presets.has(preset);
    };

    const rename = (oldPreset, newPreset) => {
        if(!has(newPreset)) {
            remove(oldPreset);
            add(newPreset);
        }
    };

    const subscribe = (key, getUpdateCallback, isNeedValueForInit) => {
        presets.subscribe(key, getUpdateCallback, isNeedValueForInit);
    };

    const unsubscribe = (key) => {
        presets.unsubscribe(key);
    };

    return Object.freeze({
        add,
        remove,
        has,
        rename,
        subscribe,
        unsubscribe,
    });
};

export default appPreset;