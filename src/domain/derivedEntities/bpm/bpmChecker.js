import inRangeIncluding from "../../../lib/inRangeIncluding";
import VALIDATION_STATUS from "../../entity/VALIDATION_STATUS";

const bpmChecker = (range) => (value) => {
    if (!Number.isInteger(value)) return VALIDATION_STATUS.FAILED.INVALID;
    if (inRangeIncluding(value, range)) return VALIDATION_STATUS.PASSED;
    if (value < range.from) return VALIDATION_STATUS.FAILED.LESS;
    if (value > range.to) return VALIDATION_STATUS.FAILED.MORE;
};

export default bpmChecker;