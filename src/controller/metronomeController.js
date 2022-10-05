import sequencerUseCases from "../application/sequencerUseCases";
import webAudioSequencer from "../services/webSequencer/webAudioSequencer";
import voiceControlUseCases from "../application/voiceControlUseCases";
import webSpeechRecognition from "../services/webSpeechRecognition/webSpeechRecognition";
import webStorage from "../services/storage/webStorage";
import localStorageAdapter from "../services/storage/localStorageAdapter";
import storageUseCases from "../application/storageUseCases";
import rangeEntityUseCases from "../application/rangeEntityUseCases";
import selectableEntityUseCases from "../application/selectableEntityUseCases";

const metronomeController = (metronomeOptions) => {
    const beat = rangeEntityUseCases(metronomeOptions.beat);
    const bpm = rangeEntityUseCases(metronomeOptions.bpm);
    const duration =  selectableEntityUseCases(false, metronomeOptions.duration);
    const upbeatSample =  selectableEntityUseCases(false, metronomeOptions.sample.upbeat);
    const downbeatSample = selectableEntityUseCases(false, metronomeOptions.sample.downbeat);

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const sequencer = sequencerUseCases(webAudioSequencer(audioContext, metronomeOptions.sample.list), {
        beat, bpm, duration, upbeatSample, downbeatSample
    });

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const speechRecognitionList = new (window.SpeechGrammarList || window.webkitSpeechGrammarList)();
    const voiceControl = voiceControlUseCases(
        webSpeechRecognition(recognition, speechRecognitionList),
    {sequencer, bpm}
    );

    const storage = storageUseCases(
        webStorage(localStorageAdapter()),
        {
            beat, bpm, duration, upbeatSample, downbeatSample
        }
    );

    return Object.freeze({
        beat,
        bpm,
        duration,
        upbeatSample,
        downbeatSample,
        sequencer,
        voiceControl,
        storage
    });
};

export default metronomeController;