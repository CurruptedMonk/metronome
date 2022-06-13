import SETTABLE_ENTITY_INTERFACE from "../../entity/settable/SETTABLE_ENTITY_INTERFACE";
import createDuration from "./createDuration";

describe('createDuration', () => {
    it("returns duration with settable entity interface", () => {
        const initialValue = 4;
        const available = [1, 2, 4, 8, 16];
        const duration = createDuration(initialValue, available);

        for(const method of SETTABLE_ENTITY_INTERFACE) {
            expect(typeof duration[method] === "function").toBe(true);
        }
    })
});