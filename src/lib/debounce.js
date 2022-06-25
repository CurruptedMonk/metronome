const debounce = (originalFn, timeoutMs = 300) => {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            originalFn.apply(this, args)
        }, timeoutMs);
    }
};

export default debounce;