import bpmChecker from "./bpmChecker";

describe("bpmChecker", () => {
    const range = { from: 20, to: 240 };
    const checker = bpmChecker(range);
    const notInteger = "";

    it("not an integer was passed as value", () => {
        expect(() => checker(notInteger)).toThrow("Value should be an integer");
    });

    it.each`
        value             | expected
        ${range.from - 1} | ${false}
        ${range.from}     | ${true}
        ${range.from + 1} | ${true}
        ${range.to - 1}   | ${true}
        ${range.to}       | ${true}
        ${range.to + 1}   | ${false}
        ${0}              | ${false}
    `("checks that $value is valid bpm", ({ value, expected }) => {
        expect(checker(value)).toBe(expected);
    });
});