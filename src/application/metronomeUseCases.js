import rangeEntityUseCases from "./rangeEntityUseCases";
import selectableEntityUseCases from "./selectableEntityUseCases";

const metronomeUseCases = (options) => {
    const beat = rangeEntityUseCases(options.beat);
    const bpm = rangeEntityUseCases(options.bpm);
    const duration =  selectableEntityUseCases(false, options.duration);
    const upbeatSample =  selectableEntityUseCases(false, options.sample.upbeat);
    const downbeatSample = selectableEntityUseCases(false, options.sample.downbeat);

    return Object.freeze({
        beat,
        bpm,
        duration,
        upbeatSample,
        downbeatSample
    });
};

export default metronomeUseCases;