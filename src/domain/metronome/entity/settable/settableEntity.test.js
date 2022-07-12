import settableEntity from "./settableEntity";
import VALIDATION_STATUS from "../VALIDATION_STATUS";

describe("settableEntity", () => {
    const passedChecker = () => VALIDATION_STATUS.PASSED;
    const failedChecker = () => VALIDATION_STATUS.FAILED.INVALID;
    const moreThanZeroChecker = (x) =>
        x > 0 ? passedChecker() : failedChecker();
    const initialValue = 1;

    describe("check initial value", () => {
        it("invalid initial value was passed", () => {
            expect(() => settableEntity(initialValue, failedChecker)).toThrow("Invalid initial value was passed!");
        });

        it("valid initial value was passed", () => {
            expect(() => settableEntity(initialValue, passedChecker)).not.toThrow("Invalid initial value was passed!");
        });
    });

    describe("set", () => {
        let callback;

        beforeEach(() => {
            callback = jest.fn();
        });

        it("valid new value was passed", () => {
            const entity = settableEntity(initialValue, passedChecker);
            const passedValue = initialValue + 1;
            entity.subscribe(Symbol(), callback);

            entity.set(passedValue);

            expect(callback).toHaveBeenCalledWith(passedValue);
        });

        it("invalid new value was passed", () => {
            const entity = settableEntity(initialValue, moreThanZeroChecker);
            const passedValue = 0;
            entity.subscribe(Symbol(), callback);

            entity.set(passedValue);

            expect(callback).not.toHaveBeenCalled();
        })
    });

    describe("subscribe", () => {
        let testEntity;
        let callback;

        beforeEach(() => {
            testEntity = settableEntity(initialValue, passedChecker);
            callback = jest.fn();
        });

        it("subscribe new subscriber with not passed isNeedValueForInit", () => {
            testEntity.subscribe(Symbol(), callback);

            expect(callback).not.toHaveBeenCalled();
        });

        it("subscribe new subscriber with isNeedValueForInit equals true", () => {
            testEntity.subscribe(Symbol(), callback, true);

            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith(initialValue);
        });
    });

    describe("unsubscribe", () => {
        let testEntity;
        beforeEach(() => {
            testEntity = settableEntity(initialValue, passedChecker);
        });

        it("called without subscribers", () => {
            expect(() => testEntity.unsubscribe(Symbol())).not.toThrow(Error);
        });

        it("called with two subscribers", () => {
            const subscribers = [
                {key:Symbol(), callback: jest.fn()},
                {key:Symbol(), callback: jest.fn()},
            ];
            const newValue = initialValue + 1

            for (const {key, callback} of subscribers) testEntity.subscribe(key, callback);
            testEntity.unsubscribe(subscribers[0].key);
            testEntity.set(newValue);

            expect(subscribers[0].callback).not.toHaveBeenCalled();
            expect(subscribers[1].callback).toHaveBeenCalledTimes(1);
            expect(subscribers[1].callback).toHaveBeenCalledWith(newValue);
        });
    });
});