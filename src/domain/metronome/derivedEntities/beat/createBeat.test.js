import createBeat from "./createBeat";
import RANGE_ENTITY_INTERFACE from "../../entity/range/RANGE_ENTITY_INTERFACE";

describe('createBeat', () => {
    it("returns beat with range entity interface", () => {
        const initialValue = 1;
        const range = { from: 1, to: 12 };
        const beat = createBeat(initialValue, range);

        const beatMethodsCount = Object.getOwnPropertyNames(beat).length;

        expect(beatMethodsCount === RANGE_ENTITY_INTERFACE.length).toBe(true);
        for(const method of RANGE_ENTITY_INTERFACE) {
            expect(typeof beat[method] === "function").toBe(true);
        }
    })
});