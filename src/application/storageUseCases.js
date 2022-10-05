import createSubscriberKeys from "./createSubscriberKeys";
import debounce from "../lib/debounce";
import partial from "../lib/partial";

const storageUseCases = (storage, entities) => {
    const DEBOUNCE_TIMEOUT_MS = 600;
    const subscriberKeys = createSubscriberKeys(entities);
    const preset = {};
    let presetName = "base";

    const save = (key, value) => {
        preset[key] = value;
        debounce(
            storage.save(presetName, preset),
            DEBOUNCE_TIMEOUT_MS
        );
    };

    const subscribeToEntitiesUpdates = (entities, callback) => {
        for (const [key, entity] of Object.entries(entities)) {
            entity.subscribe(
                subscriberKeys[key],
                partial(callback, key)
            );
        }
    }

    const setPresetName = (name) => {
        presetName = name;
        storage.save(presetName, preset)
    };

    const downloadSettings = async () => {
        const values = await storage.download(presetName);
        for (const [key, value] of Object.entries(values)) {
            entities[key].set(value);
        }
    };

    subscribeToEntitiesUpdates(entities, save);

    return Object.freeze({
        downloadSettings,
        setPresetName
    });
};

export default storageUseCases;
