import createSubscriberKeys from "./createSubscriberKeys";

const appStorage = (storage, entities) => {
    const subscriberKeys = createSubscriberKeys(entities);
    for (const [name, entity] of Object.entries(entities)) {
        entity.subscribe(subscriberKeys[name], storage.save.bind(null, name));
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
