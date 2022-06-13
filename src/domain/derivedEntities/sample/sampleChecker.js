const sampleChecker = (available) => (value) => {
    if(typeof value !== "string") throw new Error("Value should be a string");

    return available.includes(value);
};

export default sampleChecker;