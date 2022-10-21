
const range = ({from, to}) => {

    const isIncluding = (number) => {
        return number >= from && number <= to;
    };

    const valueValidationStatus = (number) => {
        if (!Number.isInteger(number)) return RANGE_VALIDATION_STATUS.FAILED.INVALID;
        if (isIncluding(number)) return RANGE_VALIDATION_STATUS.PASSED;
        if (number < from) return RANGE_VALIDATION_STATUS.FAILED.LESS_RANGE;
        if (number > to) return RANGE_VALIDATION_STATUS.FAILED.MORE_RANGE;
    }

    const getRange = () => {
        return {
            from,
            to
        };
    };

    return Object.freeze({
        valueValidationStatus,
        getRange
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