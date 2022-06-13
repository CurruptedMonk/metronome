import inRangeIncluding from "./inRangeIncluding";

describe("inRangeIncluding", () => {
    it.each([
        { range: { from: 0, to: 3 }, value: 0, expected: true },
        { range: { from: -1.33, to: -1.11 }, value: -1.11, expected: true },
        { range: { from: 1.2, to: 3 }, value: 1.1, expected: false },
        { range: { from: 0, to: 9 }, value: 10, expected: false },
    ])(
        "checks that $value in range $range.from to $range.to",
        ({ range, value, expected }) => {
            expect(inRangeIncluding(value, range)).toBe(expected);
        }
    );
});