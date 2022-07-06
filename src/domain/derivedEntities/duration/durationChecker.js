import VALIDATION_STATUS from "../../entity/VALIDATION_STATUS";

const durationChecker = (available) => (value) => {
    if (!Number.isInteger(value)) return VALIDATION_STATUS.FAILED.INVALID;

    return available.includes(value)
        ? VALIDATION_STATUS.PASSED
        : VALIDATION_STATUS.FAILED.INVALID;
};

export default durationChecker;
