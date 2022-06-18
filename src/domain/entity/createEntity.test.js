import createEntity from "./createEntity";
import ENTITY_TYPE from "./ENTITY_TYPE";
import RANGE_ENTITY_INTERFACE from "./range/RANGE_ENTITY_INTERFACE";
import SETTABLE_ENTITY_INTERFACE from "./settable/SETTABLE_ENTITY_INTERFACE";

describe("createEntity", () => {
    const initialValue = 1;
    const passedChecker = () => true;

    it("invalid type was passed", () => {
        expect(() => createEntity("BAD_TYPE", initialValue, passedChecker)).toThrow("Invalid type was passed");
    });

    it("returns settable entity", () => {
        const settableEntity = createEntity(ENTITY_TYPE.SETTABLE, initialValue, passedChecker);

        const entityMethodsCount = Object.getOwnPropertyNames(settableEntity).length;

        expect(entityMethodsCount === SETTABLE_ENTITY_INTERFACE.length).toBe(true);
        for (const method of SETTABLE_ENTITY_INTERFACE) {
            expect(typeof settableEntity[method] === "function").toBe(true);
        }
    });

    it("returns range entity", () => {
        const rangeEntity = createEntity(ENTITY_TYPE.RANGE, initialValue, passedChecker);

        const entityMethodsCount = Object.getOwnPropertyNames(rangeEntity).length;

        expect(entityMethodsCount === RANGE_ENTITY_INTERFACE.length).toBe(true);
        for (const method of RANGE_ENTITY_INTERFACE) {
            expect(typeof rangeEntity[method] === "function").toBe(true);
        }
    });
});
