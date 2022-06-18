import createSample from "./createSample";
import SETTABLE_ENTITY_INTERFACE from "../../entity/settable/SETTABLE_ENTITY_INTERFACE";

describe('createSample', () => {
    it("returns sample with settable entity interface", () => {
        const initialValue = "stick";
        const available = ["stick", "drumstick"];
        const sample = createSample(initialValue, available);

        const sampleMethodsCount = Object.getOwnPropertyNames(sample).length;

        expect(sampleMethodsCount === SETTABLE_ENTITY_INTERFACE.length).toBe(true);
        for(const method of SETTABLE_ENTITY_INTERFACE) {
            expect(typeof sample[method] === "function").toBe(true);
        }
    });
});