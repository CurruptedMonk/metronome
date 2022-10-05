import available from "../domain/selectionCollection/available/available";
import selectableEntity from "../domain/entity/selectableEntity/selectableEntity";

const selectableEntityUseCases = (isChangeableCollection, options) => {
    const collection = available(options.available);
    if (!collection.has(options.initialValue)) {
        throw new Error("Invalid initial value was passed");
    }
    const entity = selectableEntity(options.initialValue);

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
        const first = collection.getFirst();
        if(first) {
            set(first);
        }
    };

    const has = (value) => {
        return collection.has(value);
    };

    const rename = (oldValue, newValue) => {
        collection.rename(oldValue, newValue);
    };

    const subscribeToValue = (key, updateCallback, immediateCallbackCall) => {
        entity.subscribe(key, updateCallback, immediateCallbackCall);
    };

    const unsubscribeFromValue = (key) => {
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
        subscribeToValue,
        unsubscribeFromValue
    };

    const changeableCollectionApi = {
        ...immutableCollectionApi,
        add,
        remove,
        has,
        rename,
        subscribeToCollection,
        unsubscribeFromCollection
    };

    return Object.freeze(
        (isChangeableCollection
            ? changeableCollectionApi
            : immutableCollectionApi
        )
    );

};

export default selectableEntityUseCases;