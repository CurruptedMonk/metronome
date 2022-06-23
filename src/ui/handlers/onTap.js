const onTap = (() => {
    const CLEANING_TAPS_DELAY = 3000;
    const MIN_TAPS_SIZE = 2;
    const MAX_TAPS_SIZE = 5;
    let timer;
    let taps = [];

    const clearTaps = (delay) => {
        clearTimeout(timer);
        timer = setTimeout(() => {taps = []}, delay);
    };

    const calculateBpm = (taps) => {
        const second = 60000;
        return Math.round(second / averageTapsDifference(taps));
    };

    const averageTapsDifference = (tabs) => {
        const numberOfPairs = tabs.length - 1;
        return pairTapsDifferencesSum(tabs) / numberOfPairs;
    };

    const pairTapsDifferencesSum = (tabs) => {
        return tabs.reduce(pairTapsDifference, 0);
    };

    const pairTapsDifference = (acc, current, index, array) => {
        const next = array[index + 1];
        if(!next) return acc;
        return acc + (next - current);
    };

    return (callback) => {
        taps.push(Date.now());
        if (taps.length  > MAX_TAPS_SIZE) taps.shift();
        if (taps.length  >= MIN_TAPS_SIZE) callback(calculateBpm(taps));
        clearTaps(CLEANING_TAPS_DELAY);
    };
})();

export default onTap;