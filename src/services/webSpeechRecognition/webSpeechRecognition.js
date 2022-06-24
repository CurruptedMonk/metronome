import createObserver from "../../lib/createObserver";

const webSpeechRecognition = (speechRecognition, speechRecognitionList) => {
    const WEIGHT= 1;
    const grammar = "#JSGF V1.0;";
    let isListens = false;

    const resultObserver = createObserver();
    const stateObserver = createObserver();

    speechRecognitionList.addFromString(grammar, WEIGHT);
    speechRecognition.grammars = speechRecognitionList;
    speechRecognition.lang = "en-US";
    speechRecognition.continuous = false;
    speechRecognition.interimResults = false;

    speechRecognition.addEventListener("end", () => {
        if(isListens) turnOn();
    });

    speechRecognition.addEventListener("result", (e) => {
        const recognizedText = e.results["0"]["0"].transcript;
        resultObserver.notify(recognizedText);
    });

    const turnOn = () => {
        isListens = true;
        speechRecognition.start();
        stateObserver.notify(isListens);
    };

    const turnOff = () => {
        isListens = false;
        speechRecognition.abort();
        stateObserver.notify(isListens);
    };

    const toggle = () => {
        isListens ? turnOff() : turnOn();
    };

    const subscribeToResult = (key, getUpdateCallback) => {
        resultObserver.subscribe(key, getUpdateCallback);
    };

    const unsubscribeFromResult = (key) => {
        resultObserver.unsubscribe(key);
    };

    const subscribeToState = (key, getUpdateCallback) => {
        stateObserver.subscribe(key, getUpdateCallback);
    };

    const unsubscribeFromState = (key) => {
        stateObserver.unsubscribe(key);
    };

    return Object.freeze({
        turnOn,
        turnOff,
        toggle,
        subscribeToResult,
        unsubscribeFromResult,
        subscribeToState,
        unsubscribeFromState
    });
};

export default  webSpeechRecognition;