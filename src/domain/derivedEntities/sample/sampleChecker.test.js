import sampleChecker from "./sampleChecker";

describe("sampleChecker", () => {
    const available = ["claves", "drumstick", "bongo", "woodblock"];
    const checker = sampleChecker(available);
    const notString = 1;

    it("not a string was passed as value", () => {
        expect(() => checker(notString)).toThrow("Value should be a string");
    });

    it.each`
        value       | expected
        ${"claves"} | ${true}
        ${"guitar"} | ${false}
    `("check that value $value is valid sample", ({ value, expected }) => {
        expect(checker(value)).toBe(expected);
    });
});