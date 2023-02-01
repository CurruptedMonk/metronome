import selectableEntityUseCases from "./selectableEntityUseCases";
import debounce from "../lib/debounce";
import storageUseCases from "./storageUseCases";

const presetUseCases = (metronome, storage) => {
    const DEBOUNCE_TIMEOUT_MS = 600;

    const currentPresetNameStorage = storageUseCases(storage,"current_preset_name");
    const saveCurrentPresetName = debounce(currentPresetNameStorage.save, DEBOUNCE_TIMEOUT_MS)

    const presetsStorage = storageUseCases(storage,"presets");
    const savePresets = debounce(presetsStorage.save, DEBOUNCE_TIMEOUT_MS);

    const currentPresetName = {
        value: currentPresetNameStorage.download() || null
    };
    if(currentPresetName.value) {
        for (const [key, value] of Object.entries(presetsStorage.download()[currentPresetName.value])) {
            metronome[key].set(value);
        }
    }

    const presets = presetsStorage.download();
    const presetNames = presets ? Object.keys(presets) : [];

    const preset = selectableEntityUseCases(
        true,
        {
            available: presetNames,
            initialValue:currentPresetName.value
        }
    );

    const metronomeState = {};
    for (const [key, value] of Object.entries(metronome)) {
        value.subscribe(Symbol(),
            (val) => {
                metronomeState[key] = val;
                if(currentPresetName.value) {
                    const presets = presetsStorage.download() || {};
                    presets[currentPresetName.value] = metronomeState
                    savePresets(presets);
                }
            },
            true);
    }

    preset.subscribe(Symbol(), (newPresetName) => {
        currentPresetName.value = newPresetName;
        saveCurrentPresetName(newPresetName);
    });

    const set = (value) => {
        preset.set(value);
        for (const [key, val] of Object.entries(presetsStorage.download()[value])) {
            metronome[key].set(val);
        }
    };

    const add = (value) => {
        preset.add(value);
        const presets = presetsStorage.download() || {};
        presets[value] = metronomeState;
        savePresets(presets);
    };

    const remove = (value) => {
        preset.remove(value);
        const presets = presetsStorage.download();
        delete presets[value];
        savePresets(presets);
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