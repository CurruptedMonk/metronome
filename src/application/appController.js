import appBeat from "./appBeat";
import appBpm from "./appBpm";
import appDuration from "./appDuration";
import appUpbeatSample from "./appUpbeatSample";
import appDownbeatSample from "./appDownbeatSample";
import appSequencer from "./appSequencer";
import webAudioSequencer from "../services/webSequencer/webAudioSequencer";
import appVoiceControl from "./appVoiceControl";
import webSpeechRecognition from "../services/webSpeechRecognition/webSpeechRecognition";
import webStorage from "../services/storage/webStorage";
import localStorageAdapter from "../services/storage/localStorageAdapter";
import appStorage from "./appStorage";

const appController = (metronomeOptions) => {
    const beat = appBeat(metronomeOptions.beat);
    const bpm = appBpm(metronomeOptions.bpm);
    const duration =  appDuration(metronomeOptions.duration);
    const upbeatSample =  appUpbeatSample(metronomeOptions.sample.upbeat);
    const downbeatSample = appDownbeatSample(metronomeOptions.sample.downbeat);

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const sequencer = appSequencer(webAudioSequencer(audioContext, metronomeOptions.sample.list), {
        beat, bpm, duration, upbeatSample, downbeatSample
    });

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const speechRecognitionList = new (window.SpeechGrammarList || window.webkitSpeechGrammarList)();
    const voiceControl = appVoiceControl(
        webSpeechRecognition(recognition, speechRecognitionList),
    {sequencer, bpm}
    );

    const storage = appStorage(
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

export default appController;