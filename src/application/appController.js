import appBeat from "./appBeat";
import appBpm from "./appBpm";
import appDuration from "./appDuration";
import appUpbeatSample from "./appUpbeatSample";
import appDownbeatSample from "./appDownbeatSample";
import appSequencer from "./appSequencer";
import webAudioSequencer from "../services/webSequencer/webAudioSequencer";
import METRONOME_OPTIONS from "../METRONOME_OPTIONS";

const appController = () => {
    const beat = appBeat(METRONOME_OPTIONS.BEAT);
    const bpm = appBpm(METRONOME_OPTIONS.BPM);
    const duration =  appDuration(METRONOME_OPTIONS.DURATION);
    const upbeatSample =  appUpbeatSample(METRONOME_OPTIONS.SAMPLE.UPBEAT);
    const downbeatSample = appDownbeatSample(METRONOME_OPTIONS.SAMPLE.DOWNBEAT);

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const sequencer = appSequencer(webAudioSequencer(audioContext, METRONOME_OPTIONS.SAMPLE.LIST), {
        beat, bpm, duration, upbeatSample, downbeatSample
    });

    return Object.freeze({
        beat,
        bpm,
        duration,
        upbeatSample,
        downbeatSample,
        sequencer
    });
};

export default appController;