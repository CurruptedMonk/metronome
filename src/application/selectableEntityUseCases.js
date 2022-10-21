import available from "../domain/selectionCollection/available/available";
import selectableEntity from "../domain/entity/selectableEntity/selectableEntity";

const selectableEntityUseCases = (isChangeableCollection, options) => {
    const collection = available(options.available);
    if (!collection.isEmpty() && !collection.has(options.initialValue)) {
        throw new Error("Invalid initial value was passed");
    }
    const entity = selectableEntity(options.initialValue);

    let current;
    entity.subscribe(Symbol(), (value) => current = value, true);

    const set = (value) => {
        if (has(value)) {
            entity.set(value);
        }
    };

    const add = (value) => {
        collection.add(value);
        set(value);
    };

    const remove = (value) => {
        collection.remove(value);
        if(collection.isEmpty()) {
            entity.set(null);
            return;
        }
        if(current === value) {
            set(collection.getFirst());
        }
    };

    const has = (value) => {
        return collection.has(value);
    };

    const rename = (oldValue, newValue) => {
        collection.rename(oldValue, newValue);
        if(current === oldValue) set(newValue);
    };

    const subscribe = (key, updateCallback, immediateCallbackCall) => {
        entity.subscribe(key, updateCallback, immediateCallbackCall);
    };

    const unsubscribe = (key) => {
        entity.unsubscribe(key);
    };

    const subscribeToCollection = (key, updateCallback, immediateCallbackCall) => {
        collection.subscribe(key, updateCallback, immediateCallbackCall);
    };

    const unsubscribeFromCollection = (key) => {
        collection.unsubscribe(key);
    };

    const immutableCollectionApi = {
        set,
        subscribe,
        unsubscribe,
        subscribeToCollection,
        unsubscribeFromCollection
    };

    const changeableCollectionApi = {
        ...immutableCollectionApi,
        add,
        remove,
        has,
        rename,
    };

    return Object.freeze(
        (isChangeableCollection
            ? changeableCollectionApi
            : immutableCollectionApi
        )
    );

};

export default selectableEntityUseCases;