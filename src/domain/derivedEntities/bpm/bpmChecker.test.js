import bpmChecker from "./bpmChecker";
import VALIDATION_STATUS from "../../entity/VALIDATION_STATUS";

describe("bpmChecker", () => {
    const range = { from: 20, to: 240 };
    const checker = bpmChecker(range);
    const notInteger = "";

    it("not an integer was passed as value", () => {
        expect(checker(notInteger)).toBe(VALIDATION_STATUS.FAILED.INVALID);
    });

    it.each`
        value             | expected
        ${range.from - 1} | ${VALIDATION_STATUS.FAILED.LESS}
        ${range.from}     | ${VALIDATION_STATUS.PASSED}
        ${range.from + 1} | ${VALIDATION_STATUS.PASSED}
        ${range.to - 1}   | ${VALIDATION_STATUS.PASSED}
        ${range.to}       | ${VALIDATION_STATUS.PASSED}
        ${range.to + 1}   | ${VALIDATION_STATUS.FAILED.MORE}
        ${0}              | ${VALIDATION_STATUS.FAILED.LESS}
    `("checks that $value is valid bpm", ({ value, expected }) => {
        expect(checker(value)).toBe(expected);
    });
});