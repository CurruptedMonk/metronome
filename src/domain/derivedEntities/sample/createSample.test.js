import createSample from "./createSample";
import SETTABLE_ENTITY_INTERFACE from "../../entity/settable/SETTABLE_ENTITY_INTERFACE";

describe('createSample', () => {
    it("returns sample with settable entity interface", () => {
        const initialValue = "stick";
        const available = ["stick", "drumstick"];
        const duration = createSample(initialValue, available);

        for(const method of SETTABLE_ENTITY_INTERFACE) {
            expect(typeof duration[method] === "function").toBe(true);
        }
    });
});