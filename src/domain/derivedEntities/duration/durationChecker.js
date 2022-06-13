const durationChecker = (available) => (value) =>{
    if(!Number.isInteger(value)) throw new Error("Value should be an integer");

    return (value > 0) && available.includes(value);
};

export default durationChecker;