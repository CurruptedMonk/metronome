import sequencerUseCases from "../application/sequencerUseCases";
import webAudioSequencer from "../services/webSequencer/webAudioSequencer";
import voiceControlUseCases from "../application/voiceControlUseCases";
import webSpeechRecognition from "../services/webSpeechRecognition/webSpeechRecognition";
import presetUseCases from "../application/presetUseCases";
import metronomeUseCases from "../application/metronomeUseCases";
import syncWebStorage from "../services/storage/syncWebStorage";
import localStorageAdapter from "../services/storage/localStorageAdapter";

const metronomeController = (metronomeOptions) => {
    const metronome = metronomeUseCases(metronomeOptions);

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const sequencer = sequencerUseCases(webAudioSequencer(audioContext, metronomeOptions.sample.list), {
        beat: metronome.beat,
        bpm: metronome.bpm,
        duration: metronome.duration,
        upbeatSample: metronome.upbeatSample,
        downbeatSample: metronome.downbeatSample
    });

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const speechRecognitionList = new (window.SpeechGrammarList || window.webkitSpeechGrammarList)();
    const voiceControl = voiceControlUseCases(
        webSpeechRecognition(recognition, speechRecognitionList),
    {sequencer, bpm: metronome.bpm}
    );

    const storage = syncWebStorage(localStorageAdapter());
    const preset = presetUseCases(metronome, storage);

    return Object.freeze({
        ...metronome,
        preset,
        sequencer,
        voiceControl,
    });
};

export default metronomeController;