import createBpm from "./createBpm";
import RANGE_ENTITY_INTERFACE from "../../entity/range/RANGE_ENTITY_INTERFACE";

describe('createBpm', () => {
    it("returns bpm with range entity interface", () => {
        const initialValue = 20;
        const range = { from: 20, to: 240 };
        const bpm = createBpm(initialValue, range)

        for(const method of RANGE_ENTITY_INTERFACE) {
            expect(typeof bpm[method] === "function").toBe(true);
        }
    })
});