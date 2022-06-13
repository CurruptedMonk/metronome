import settableEntity from "./settableEntity";

describe("settableEntity", () => {
    const passedChecker = () => true;
    const failedChecker = () => false;
    const moreThenZeroChecker = (x) => x > 0;
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
        let testEntity;
        let callback;

        beforeEach(() => {
            testEntity = settableEntity(initialValue, moreThenZeroChecker);
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