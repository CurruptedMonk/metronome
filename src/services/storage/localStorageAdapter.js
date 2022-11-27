const localStorageAdapter = () => {
    const set = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const get = (key) => {
        return JSON.parse(localStorage.getItem(key));
    };

    const remove = (key) => {
        localStorage.removeItem(key);
    };

    return Object.freeze({
        set,
        get,
        remove
    });
};

export default localStorageAdapter;