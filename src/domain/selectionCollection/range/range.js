
const range = ({from, to}) => {

    const isIncluding = (number) => {
        return number >= from && number <= to;
    };

    const valueValidation = (number) => {
        if (!Number.isInteger(number)) return RANGE_VALIDATION_STATUS.FAILED.INVALID;
        if (isIncluding(number)) return RANGE_VALIDATION_STATUS.PASSED;
        if (number < range.from) return RANGE_VALIDATION_STATUS.FAILED.LESS_RANGE;
        if (number > range.to) return RANGE_VALIDATION_STATUS.FAILED.MORE_RANGE;
    }

    return Object.freeze({
        valueValidation,
        from,
        to
    });
};

const RANGE_VALIDATION_STATUS = Object.freeze(
    {
        PASSED: "PASSED",
        FAILED: {
            LESS_RANGE: "LESS_RANGE",
            MORE_RANGE: "MORE_RANGE",
            INVALID: "INVALID"
        }
    }
);

export {
    range,
    RANGE_VALIDATION_STATUS
};