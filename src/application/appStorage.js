import createSubscriberKeys from "./createSubscriberKeys";
import debounce from "../lib/debounce";
import partial from "../lib/partial";

const appStorage = (storage, entities) => {
    const DEBOUNCE_TIMEOUT_MS = 600;
    const subscriberKeys = createSubscriberKeys(entities);

    for (const [name, entity] of Object.entries(entities)) {
        entity.subscribe(
            subscriberKeys[name],
            debounce(
                partial(storage.save, name),
                DEBOUNCE_TIMEOUT_MS
            )
        );
    }

    const downloadSettings = async () => {
        for (const [name, entity] of Object.entries(entities)) {
            const value = await storage.download(name);
            if(value) entity.set(value);
        }
    };

    return Object.freeze({
        downloadSettings
    });
};

export default appStorage;
