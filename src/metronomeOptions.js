const sampleList = ["claves", "drumstick", "bongo", "woodblock"];

const metronomeOptions = Object.freeze({
    beat: {
        initialValue: 4,
        range: {from: 1, to: 12}
    },
    bpm: {
        initialValue: 120,
        range: {from: 20, to: 240}
    },
    duration: {
        initialValue: 4,
        available: [1, 2, 4, 8, 16],
    },
    sample: {
        list: sampleList,
        upbeat: {
            initialValue: sampleList[0],
            available: sampleList,
        },
        downbeat: {
            initialValue:sampleList[1],
            available: sampleList,
        }
    }
});

export default metronomeOptions;