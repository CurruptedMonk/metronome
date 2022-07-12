import durationChecker from "./durationChecker";
import VALIDATION_STATUS from "../../entity/VALIDATION_STATUS";

describe("durationChecker", () => {
    const available = [1, 2, 4, 8, 16];
    const checker = durationChecker(available);
    const notInteger = "";

    it("not an integer was passed as value", () => {
        expect(checker(notInteger)).toBe(VALIDATION_STATUS.FAILED.INVALID);
    });

    it.each`
        value | expected
        ${1}  | ${VALIDATION_STATUS.PASSED}
        ${3}  | ${VALIDATION_STATUS.FAILED.INVALID}
    `("check that $value is valid duration", ({ value, expected }) => {
        expect(checker(value)).toBe(expected);
    });
});