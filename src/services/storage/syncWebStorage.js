const syncWebStorage = (webStorage) => {

    const save = (key, value) => {
        webStorage.set(key, value);
    };

    const download = (key) => {
        return webStorage.get(key);
    };

    const remove = (key) => {
        webStorage.remove(key);
    };

    return Object.freeze({
        save,
        remove,
        download
    });
};

export default syncWebStorage;