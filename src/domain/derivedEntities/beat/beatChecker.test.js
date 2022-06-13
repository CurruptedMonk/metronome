import beatChecker from "./beatChecker";

describe("beatChecker", () => {
    const range = { from: 1, to: 12 };
    const checker = beatChecker(range);
    const notInteger = "";

    it("not an integer was passed as value", () => {
        expect(() => checker(notInteger)).toThrow("Value should be an integer");
    });

    it.each`
        value             | expected
        ${range.from - 2} | ${false}
        ${range.from}     | ${true}
        ${range.from + 1} | ${true}
        ${range.to - 1}   | ${true}
        ${range.to}       | ${true}
        ${range.to + 1}   | ${false}
        ${0}              | ${false}
    `("checks that $value is valid beat", ({ value, expected }) => {
        expect(checker(value)).toBe(expected);
    });
});