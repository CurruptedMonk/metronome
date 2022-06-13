import inRangeIncluding from "../../../lib/inRangeIncluding";

const beatChecker = (range) => (value) => {
    if(!Number.isInteger(value)) throw new Error("Value should be an integer");

    return (value > 0) && inRangeIncluding(value, range);
}

export default beatChecker;