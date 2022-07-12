import commandExecutor from "../../services/webSpeechRecognition/commandExecutor";

const appVoiceControl = (speechRecognition, {sequencer, bpm}) => {
    const executor = commandExecutor(sequencer, bpm, speechRecognition.turnOff);
    const executorSubscriberKey = Symbol();
    speechRecognition.subscribeToResult(executorSubscriberKey, executor.execute);

    const toggle = () => {
        speechRecognition.toggle();
    };

    const subscribe = (key, getUpdateCallback) => {
        speechRecognition.subscribeToState(key, getUpdateCallback);
    };

    const unsubscribe = (key) => {
        speechRecognition.unsubscribeFromState(key);
    };

    return Object.freeze({
        toggle,
        subscribe,
        unsubscribe,
    });
};

export default appVoiceControl;