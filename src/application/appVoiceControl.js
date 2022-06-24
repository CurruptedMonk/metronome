const appVoiceControl = (speechRecognition) => {

    const toggle = () => {
        speechRecognition.toggle();
    };

    const subscribeToState = (key, getUpdateCallback) => {
        speechRecognition.subscribeToState(key, getUpdateCallback);
    };

    const unsubscribeFromState = (key) => {
        speechRecognition.unsubscribeFromState(key);
    };

    return Object.freeze({
        toggle,
        subscribeToState,
        unsubscribeFromState,
    });
};

export default appVoiceControl;