import sequencerUseCases from "../application/sequencerUseCases";
import webAudioSequencer from "../services/webSequencer/webAudioSequencer";
import voiceControlUseCases from "../application/voiceControlUseCases";
import webSpeechRecognition from "../services/webSpeechRecognition/webSpeechRecognition";
import presetUseCases from "../application/presetUseCases";
import metronomeUseCases from "../application/metronomeUseCases";
import storageUseCases from "../application/storageUseCases";
import syncWebStorage from "../services/storage/syncWebStorage";
import localStorageAdapter from "../services/storage/localStorageAdapter";

const metronomeController = (metronomeOptions) => {
    const storage = storageUseCases(syncWebStorage(localStorageAdapter()));
    const metronome = metronomeUseCases(metronomeOptions);
    const preset = presetUseCases( {available: [], initialValue: null}, storage);

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const sequencer = sequencerUseCases(webAudioSequencer(audioContext, metronomeOptions.sample.list),metronome);

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const speechRecognitionList = new (window.SpeechGrammarList || window.webkitSpeechGrammarList)();
    const voiceControl = voiceControlUseCases(
        webSpeechRecognition(recognition, speechRecognitionList),
    {sequencer, bpm: metronome.bpm}
    );


    return Object.freeze({
        ...metronome,
        preset,
        sequencer,
        voiceControl,
    });
};

export default metronomeController;