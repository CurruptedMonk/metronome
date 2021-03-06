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

    const set = (entityName, value) => {
        const setFn = setters[entityName];
        if(!setFn) throw new Error("Invalid entity name")
        setFn(value);
    };

    const setters = {
        beat: (value) => {
            sequence = createSequence(value);
            beatIterator = createSequenceIterator(sequence);
        },
        bpm: (value) => {
            bpm = value;
        },
        duration: (value) => {
            duration = value;
        },
        upbeatSample: (value) => {
            upbeatSample = value;
        },
        downbeatSample: (value) => {
            downBeatSample = value;
        }
    };

    const subscribeToState = (key, getUpdateCallback) => {
        observer.subscribe(key, getUpdateCallback);
    };

    const unsubscribeFromState = (key) => {
        observer.unsubscribe(key);
    };

    return Object.freeze({
        loadSamples,
        play,
        stop,
        set,
        subscribeToState,
        unsubscribeFromState
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