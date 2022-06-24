import commandExecutor from "../services/webSpeechRecognition/commandExecutor";

const appVoiceControl = (speechRecognition, {sequencer, bpm}) => {
    const executor = commandExecutor(sequencer, bpm, speechRecognition.turnOff);
    const executorSubscriberKey = Symbol();
    speechRecognition.subscribeToResult(executorSubscriberKey, executor.execute);

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