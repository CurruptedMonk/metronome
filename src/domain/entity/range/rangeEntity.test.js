import rangeEntity from "./rangeEntity";

describe("rangeEntity", () => {
    const passedChecker = () => true;
    const failedChecker = () => false;
    const moreThenZeroChecker = (x) => x > 0;
    const initialValue = 1;
    const step = 1;

    describe("check initial value", () => {
        it("invalid initial value was passed", () => {
            expect(() => rangeEntity(initialValue, failedChecker)).toThrow("Invalid initial value was passed!");
        });

        it("valid initial value was passed", () => {
            expect(() => rangeEntity(initialValue, passedChecker)).not.toThrow("Invalid initial value was passed!");
        });
    });

    describe("set", () => {
        let testEntity;
        let callback;

        beforeEach(() => {
            testEntity = rangeEntity(initialValue, moreThenZeroChecker);
            callback = jest.fn();
        });

        it("valid new value was passed", () => {
            const passedValue = initialValue + 1;
            testEntity.subscribe(Symbol(), callback);

            testEntity.set(passedValue);

            expect(callback).toHaveBeenCalledWith(passedValue);
        });

        it("invalid new value was passed", () => {
            const passedValue = 0;
            testEntity.subscribe(Symbol(), callback);

            testEntity.set(passedValue);

            expect(callback).not.toHaveBeenCalled();
        })
    });

    describe("check", () => {

        it("checker returns true and current value not equals new value", () => {
            const entity = rangeEntity(initialValue, passedChecker);
            const newValue = initialValue + 1;

            expect(entity.check(newValue)).toBe(true);
        });

        it("checker returns false and current value not equals new value", () => {
            const entity = rangeEntity(initialValue, moreThenZeroChecker);
            const newValue = 0;

            expect(entity.check(newValue)).toBe(false);
        });

        it("checker returns true and current value equals new value", () => {
            const entity = rangeEntity(initialValue, passedChecker);
            const newValue = initialValue;

            expect(entity.check(newValue)).toBe(false);
        });
    });

    describe("increaseBy", () => {
        let testEntity;
        let callback;

        beforeEach(() => {
            testEntity = rangeEntity(initialValue, passedChecker);
            callback = jest.fn();
        });

        it("increase current value by passed step", () => {
            testEntity.subscribe(Symbol(), callback);

            testEntity.increaseBy(step);

            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith(initialValue + step);
        });
    });

    describe("decreaseBy", () => {
        let testEntity;
        let callback;

        beforeEach(() => {
            testEntity = rangeEntity(initialValue, passedChecker);
            callback = jest.fn();
        });

        it("decrease current value by passed step", () => {
            testEntity.subscribe(Symbol(), callback);

            testEntity.decreaseBy(step);

            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith(initialValue - step);
        });
    });

    describe("subscribe", () => {
        let testEntity;
        let callback;

        beforeEach(() => {
            testEntity = rangeEntity(initialValue, passedChecker);
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
            testEntity = rangeEntity(initialValue, passedChecker);
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