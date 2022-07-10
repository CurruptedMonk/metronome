import beatChecker from "./beatChecker";
import VALIDATION_STATUS from "../../entity/VALIDATION_STATUS";

describe("beatChecker", () => {
    const range = { from: 1, to: 12 };
    const checker = beatChecker(range);
    const notInteger = "";

    it("not an integer was passed as value", () => {
        expect(checker(notInteger)).toBe(VALIDATION_STATUS.FAILED.INVALID);
    });

    it.each`
        value             | expected
        ${range.from - 2} | ${VALIDATION_STATUS.FAILED.LESS}
        ${range.from}     | ${VALIDATION_STATUS.PASSED}
        ${range.from + 1} | ${VALIDATION_STATUS.PASSED}
        ${range.to - 1}   | ${VALIDATION_STATUS.PASSED}
        ${range.to}       | ${VALIDATION_STATUS.PASSED}
        ${range.to + 1}   | ${VALIDATION_STATUS.FAILED.MORE}
        ${0}              | ${VALIDATION_STATUS.FAILED.LESS}
    `("checks that $value is valid beat", ({ value, expected }) => {
        expect(checker(value)).toBe(expected);
    });
});