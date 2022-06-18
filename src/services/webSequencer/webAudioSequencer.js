import createObserver from "../../lib/createObserver";
import loadAudioAsBuffersMap from "./loadAudioAsBuffersMap";

const webAudioSequencer = (audioContext, sampleList) => {
    let audioBufferMap, sequence, beatIterator, source, bpm, duration, upbeatSample, downBeatSample;
    const observer = createObserver();

    const loadSamples = async () => {
        audioBufferMap = await loadAudioAsBuffersMap(audioContext, sampleList);
    };

    const play = () => {
        if (isRunning()) return;
        let nextStartTime = audioContext.currentTime;
        const playSamples = () => {
            const nextBeatType = beatIterator.next().value;
            const nextSample = nextBeatType === "UPBEAT" ? upbeatSample : downBeatSample;

            source = audioContext.createBufferSource();
            source.buffer = audioBufferMap.get(nextSample);
            source.connect(audioContext.destination);
            source.start(nextStartTime);
            source.onended = playSamples;

            nextStartTime += 60 / (bpm * (duration / 4));
            observer.notify(isRunning());
        }

        playSamples();
        audioContext.resume();
    };

    const stop = () => {
        audioContext.suspend();
        if (source) source.buffer = null;
        observer.notify(isRunning());
    };

    const isRunning = () => {
        return audioContext.state === "running";
    };

    const setBeat = (value) => {
        sequence = createSequence(value);
        beatIterator = createSequenceIterator(sequence);
    };

    const setBpm = (value) => {
        bpm = value;
    };

    const setDuration = (value) => {
        duration = value;
    };

    const setUpbeatSample = (value) => {
        upbeatSample = value;
    };

    const setDownbeatSample = (value) => {
        downBeatSample = value;
    };

    const subscribeToState = (key, getUpdateCallback) => {
        observer.subscribe(key, getUpdateCallback);
    };

    return Object.freeze({
        loadSamples,
        play,
        stop,
        setBeat,
        setBpm,
        setDuration,
        setUpbeatSample,
        setDownbeatSample,
        subscribeToState
    });
};

const createSequence = (beat) => {
    if (beat <= 0) throw new Error("Beat should be greater than zero");

    const sequence = ["UPBEAT"];
    for (let i = 0; i < beat - 1; i++) {
        sequence.push("DOWNBEAT");
    }

    return sequence;
};

const createSequenceIterator = function* (sequence) {
    let currentBeatIndex = 0;
    const lastBeatIndex = sequence.length - 1;

    while (true) {
        yield sequence[currentBeatIndex];
        currentBeatIndex++;
        if (currentBeatIndex > lastBeatIndex) {
            currentBeatIndex = 0;
        }
    }
};

export default webAudioSequencer;