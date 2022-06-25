const webStorage = (webStorage) => {

    const save = (key, value) => {
        webStorage.set(key, value);
    };

    const download = async (key) => {
        return await webStorage.get(key);
    };

    return Object.freeze({
        save,
        download
    });
};

export default webStorage;