import rangeEntityUseCases from "./rangeEntityUseCases";
import selectableEntityUseCases from "./selectableEntityUseCases";

const metronomeUseCases = (options) => {

    const entities = {
        beat : rangeEntityUseCases(options.beat),
        bpm : rangeEntityUseCases(options.bpm),
        duration :  selectableEntityUseCases(false, options.duration),
        upbeatSample :  selectableEntityUseCases(false, options.sample.upbeat),
        downbeatSample : selectableEntityUseCases(false, options.sample.downbeat),
    };

    return Object.freeze({
        ...entities,
    });
};

export default metronomeUseCases;