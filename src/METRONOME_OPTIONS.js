const sampleList = ["claves", "drumstick", "bongo", "woodblock"];

const METRONOME_OPTIONS = Object.freeze({
    BEAT: {
        initialValue: 4,
        range: {from: 1, to: 12}
    },
    BPM: {
        initialValue: 120,
        range: {from: 20, to: 240}
    },
    DURATION: {
        initialValue: 4,
        available: [1, 2, 4, 8, 16],
    },
    SAMPLE: {
        LIST: sampleList,
        UPBEAT: {
            initialValue: sampleList[0],
            available: sampleList,
        },
        DOWNBEAT: {
            initialValue:sampleList[1],
            available: sampleList,
        }
    }
});


export default METRONOME_OPTIONS;