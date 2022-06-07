const createObserver = () => {
    const subscribers = new Map();

    const subscribe = (key, getUpdateCallback) => {
        if(typeof key !== "symbol") throw new Error("Key should be of symbol type");
        subscribers.set(key, getUpdateCallback);
    };

    const unsubscribe = (key) => {
        subscribers.delete(key);
    };

    const notify = (value) => {
        for (const callback of subscribers.values()) {
            callback(value);
        }
    };

    return Object.freeze(
        {
            subscribe,
            unsubscribe,
            notify
        }
    );
};

export default createObserver;