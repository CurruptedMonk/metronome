const loadAudioAsBuffersMap = async (audioContext, sampleList) => {
    let result;
    const promises = sampleList.map(sample => (
            loadAudio(sample).then(loadedSample => decodeSample(loadedSample, audioContext))
        )
    );

    await Promise.all(promises)
        .then(buffers => result = createBuffersMap(buffers))
        .catch(console.error);

    return result;
};

const loadAudio = async (name) => {
    const url = `./audio/${name}.wav`;
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();

        xhr.responseType = "arraybuffer";
        xhr.onload = () => {
            resolve({ name: name, data: xhr.response });
        };
    });
};

const decodeSample = (loadedSample, audioContext) => {
    return new Promise((resolve, reject) => {
        audioContext.decodeAudioData(loadedSample.data, (decodedAudio) => {
            resolve({
                name: loadedSample.name,
                decodedAudio
            });
        },
            () => reject(new Error(`Can not decode audio "${loadedSample.name}"`)));
    });
};

const createBuffersMap = (buffers) => {
    const buffersMap = new Map();
    for (const buffer of buffers) {
        buffersMap.set(buffer.name, buffer.decodedAudio)
    }

    return buffersMap
};

export default loadAudioAsBuffersMap;