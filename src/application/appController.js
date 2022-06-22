import appBeat from "./appBeat";
import appBpm from "./appBpm";
import appDuration from "./appDuration";
import appUpbeatSample from "./appUpbeatSample";
import appDownbeatSample from "./appDownbeatSample";
import appSequencer from "./appSequencer";
import webAudioSequencer from "../services/webSequencer/webAudioSequencer";

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