
const storageUseCases = (storage, key) => {

    const save = (value) => {
        storage.save(key, value);
    };

    const remove = () => {
        storage.remove(key);
    };

    const download = () => {
        return storage.download(key);
    };

    return Object.freeze({
        save,
        remove,
        download
    });
};

export default storageUseCases;
