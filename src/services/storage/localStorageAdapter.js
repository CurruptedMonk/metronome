const webLocalStorage = () => {
    const set = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const get = (key) => {
        return JSON.parse(localStorage.getItem(key));
    };

    return Object.freeze({
        set,
        get
    });
};

export default webLocalStorage;