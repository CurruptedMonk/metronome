import createSubscriberKeys from "./createSubscriberKeys";

const appSequencer = (sequencer, entities) => {
    const subscriberKeys = createSubscriberKeys(entities);
    for (const [name, entity] of Object.entries(entities)) {
        entity.subscribe(subscriberKeys[name], sequencer.set.bind(null, name), true);
    }

    const loadSamples = async () => {
        await sequencer.loadSamples();
    };

    const play = () => {
        sequencer.play();
    };

    const stop = () => {
        sequencer.stop();
    };

    const subscribeToState = (key, getUpdateCallback) => {
        sequencer.subscribeToState(key, getUpdateCallback);
    };

    const unsubscribeFromState = (key) => {
        sequencer.unsubscribeFromState(key);
    };

    return Object.freeze({
        loadSamples,
        play,
        stop,
        subscribeToState,
        unsubscribeFromState
    });
};

export default appSequencer;