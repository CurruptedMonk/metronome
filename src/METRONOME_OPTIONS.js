const METRONOME_OPTIONS = Object.freeze({
    BEAT: {
        initialValue: 4,
        range: {from: 1, to: 12}
    },
    BPM: {
        initialValue: 4,
        range: {from: 20, to: 240}
    },
    DURATION: {
        initialValue: 4,
        available: [1, 2, 4, 8, 16],
    },
    SAMPLE: {
        UPBEAT: {
            initialValue: "claves",
            available: ["claves", "drumstick", "bongo", "woodblock"],
        },
        DOWNBEAT: {
            initialValue:"drumstick",
            available: ["claves", "drumstick", "bongo", "woodblock"],
        }
    }
});

export default METRONOME_OPTIONS;