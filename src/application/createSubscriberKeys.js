const createSubscriberKeys = (entities) => {
    const keys = {};
    for (const name of Object.keys(entities)) {
        keys[name] = Symbol();
    }

    return keys;
};

export default createSubscriberKeys;