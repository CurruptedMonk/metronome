import createObserver from "./createObserver";

describe("createObserver", () => {
    let observer;

    beforeEach(() => {
        observer = createObserver();
    });

    describe("subscribe", () => {
        it("called with valid key type", () => {
            const validKeyType = Symbol();
            expect(() => observer.subscribe(validKeyType, jest.fn())).not.toThrow("Key should be of symbol type");
        });

        it("called with invalid key type", () => {
            const invalidKeyType = "";
            expect(() => observer.subscribe(invalidKeyType, jest.fn())).toThrow("Key should be of symbol type");
        });
    });

    describe("unsubscribe", () => {
        it("called without subscribers", () => {
            expect(() => observer.unsubscribe(Symbol())).not.toThrow(Error);
        });

        it("called with two subscribers", () => {
            const subscribers = [
                {key:Symbol(), callback: jest.fn()},
                {key:Symbol(), callback: jest.fn()},
            ];
            for (const {key, callback} of subscribers) observer.subscribe(key, callback);
            observer.unsubscribe(subscribers[0].key);
            observer.notify();

            expect(subscribers[0].callback).not.toHaveBeenCalled();
            expect(subscribers[1].callback).toHaveBeenCalledTimes(1);
        });
    });

    describe("notify", () => {
        it("called without subscribers", () => {
            expect(() => observer.notify()).not.toThrow(Error);
        });

        it("called with one subscriber without parameter", () => {
            const callback = jest.fn();

            observer.subscribe(Symbol(), callback);
            observer.notify();

            expect(callback).toHaveBeenCalledTimes(1);
        });

        it("called with two subscribers with parameter", () => {
            const subscribers = [
                {key:Symbol(), callback: jest.fn()},
                {key:Symbol(), callback: jest.fn()},
            ];
            const value = 1;

            for (const {key, callback} of subscribers) observer.subscribe(key, callback);
            observer.notify(value);

            for (const {callback} of subscribers) {
                    expect(callback).toHaveBeenCalledTimes(1);
                    expect(callback).toHaveBeenCalledWith(value);
            }
        });
    });
});