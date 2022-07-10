import VALIDATION_STATUS from "../../entity/VALIDATION_STATUS";

const sampleChecker = (available) => (value) => {
    if (typeof value !== "string") return VALIDATION_STATUS.FAILED.INVALID;
    return available.includes(value)
        ? VALIDATION_STATUS.PASSED
        : VALIDATION_STATUS.FAILED.INVALID;
};

export default sampleChecker;
