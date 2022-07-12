const VALIDATION_STATUS = Object.freeze(
    {
        PASSED: "PASSED",
        FAILED: {
            LESS: "LESS",
            MORE: "MORE",
            INVALID: "INVALID"
        }
    }
);

export default VALIDATION_STATUS;