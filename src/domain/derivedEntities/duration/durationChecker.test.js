import durationChecker from "./durationChecker";

describe("durationChecker", () => {
    const available = [1, 2, 4, 8, 16];
    const checker = durationChecker(available);
    const notInteger = "";

    it("not an integer was passed as value", () => {
        expect(() => checker(notInteger)).toThrow("Value should be an integer");
    });

    it.each`
        value | expected
        ${1}  | ${true}
        ${3}  | ${false}
    `("check that $value is valid duration", ({ value, expected }) => {
        expect(checker(value)).toBe(expected);
    });
});