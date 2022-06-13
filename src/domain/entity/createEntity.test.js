import createEntity from "./createEntity";
import ENTITY_TYPE from "./ENTITY_TYPE";

describe("createEntity", () => {
    const initialValue = 1;
    const passedChecker = () => true;

    it("invalid type was passed", () => {
        expect(() => createEntity("BAD_TYPE", initialValue, passedChecker)).toThrow("Invalid type was passed");
    });

    it("returns settable entity", () => {
        const settableEntity = createEntity(ENTITY_TYPE.SETTABLE, initialValue, passedChecker);
        const  settableEntityInterface= ["set", "subscribe", "unsubscribe"];
        for(const method of settableEntityInterface) {
            expect(typeof settableEntity[method] === "function").toBe(true);
        }
    });

    it("returns range entity", () => {
        const rangeEntity = createEntity(ENTITY_TYPE.RANGE, initialValue, passedChecker);
        const rangeEntityInterface = ["set", "subscribe", "unsubscribe", "increaseBy", "decreaseBy"];
        for(const method of rangeEntityInterface) {
            expect(typeof rangeEntity[method] === "function").toBe(true);
        }
    });
});
