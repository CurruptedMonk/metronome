const SUBSCRIBER_KEY = Object.freeze({
    BEAT: Symbol(),
    BPM: Symbol(),
    DURATION: Symbol(),
    UPBEAT_SAMPLE: Symbol(),
    DOWNBEAT_SAMPLE: Symbol()
});

const sequencer = (sequencer, {beat, bpm, duration, upbeatSample, downbeatSample}) => {
    beat.subscribe(SUBSCRIBER_KEY.BEAT, sequencer.setBeat, true);
    bpm.subscribe(SUBSCRIBER_KEY.BPM, sequencer.setBpm, true);
    duration.subscribe(SUBSCRIBER_KEY.DURATION, sequencer.setDuration, true);
    upbeatSample.subscribe(SUBSCRIBER_KEY.UPBEAT_SAMPLE, sequencer.setUpbeatSample, true);
    downbeatSample.subscribe(SUBSCRIBER_KEY.DOWNBEAT_SAMPLE, sequencer.setDownbeatSample, true);

    const loadSamples = async () => {
        await sequencer.loadSamples();
    };

    const play = () => {
        sequencer.play();
    };

    const stop = () => {
        sequencer.stop();
    };

    const subscribeToState = (key, getUpdateCallback) => {
        sequencer.subscribeToState(key, getUpdateCallback);
    };

    return Object.freeze({
        loadSamples,
        play,
        stop,
        subscribeToState
    });
};

export default sequencer;