import sampleChecker from "./sampleChecker";
import VALIDATION_STATUS from "../../entity/VALIDATION_STATUS";

describe("sampleChecker", () => {
    const available = ["claves", "drumstick", "bongo", "woodblock"];
    const checker = sampleChecker(available);
    const notString = 1;

    it("not a string was passed as value", () => {
        expect(checker(notString)).toBe(VALIDATION_STATUS.FAILED.INVALID);
    });

    it.each`
        value       | expected
        ${"claves"} | ${VALIDATION_STATUS.PASSED}
        ${"guitar"} | ${VALIDATION_STATUS.FAILED.INVALID}
    `("check that value $value is valid sample", ({ value, expected }) => {
        expect(checker(value)).toBe(expected);
    });
});