const onKeyBoard = (callback, keys, e) => {
    const lowerCasedKeys = keys.map((key) => key.toLowerCase());
    const uniqueKeys = new Set(lowerCasedKeys);

    if (uniqueKeys.has(e.key.toLowerCase())) {
        callback();
    }
};

export default onKeyBoard;
