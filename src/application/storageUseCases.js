import debounce from "../lib/debounce";

const storageUseCases = (storage) => {
    const DEBOUNCE_TIMEOUT_MS = 600;
    const debouncedSave = debounce(storage.save, DEBOUNCE_TIMEOUT_MS);

    const save = (key, value) => {
        debouncedSave(key, value);
    };

    const remove = (key) => {
        storage.remove(key);
    };

    const download = (key) => {
        return storage.download(key);
    };

    return Object.freeze({
        save,
        remove,
        download
    });
};

export default storageUseCases;
