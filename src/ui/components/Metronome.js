import SubscribedSlider from "./slider/SubscribedSlider";
import { DecreaseButton, IncreaseButton } from "./button/buttons.js";
import { StartButton, TapButton, VoiceControlButton } from "./button/buttons";
import SubscribedDuration from "./radio/SubscribedImagedRadio";
import SampleSelect from "./select/NamedSelect";
import SubscribedValue from "./value/SubscribedValue";

const Metronome = ({ controller, options }) => {
    const {
        bpm,
        beat,
        duration,
        sequencer,
        upbeatSample,
        downbeatSample,
        voiceControl,
    } = controller;
    const STEP = 1;
    const SMALL_HELD_DELAY = 35;
    const MEDIUM_HELD_DELAY = 100;

    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    flexDirection: "column",
                    fontSize: "2rem",
                }}
            >
                <div>
                    <SubscribedValue controller={bpm} />
                    {" BPM"}
                </div>
                <div>
                    <SubscribedValue controller={beat} />
                    /
                    <SubscribedValue controller={duration} />
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <DecreaseButton
                    controller={bpm}
                    step={STEP}
                    heldDelay={SMALL_HELD_DELAY}
                    size={"large"}
                    type="primary"
                    shape="circle"
                />
                <SubscribedSlider
                    style={{ width: "100%" }}
                    controller={bpm}
                    min={options.bpm.range.from}
                    max={options.bpm.range.to}
                    step={STEP}
                />
                <IncreaseButton
                    controller={bpm}
                    step={STEP}
                    heldDelay={SMALL_HELD_DELAY}
                    size={"large"}
                    type="primary"
                    shape="circle"
                />
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <StartButton
                    controller={sequencer}
                    type={"primary"}
                    size={"large"}
                />
                <TapButton controller={bpm} type={"primary"} size={"large"} />
                <VoiceControlButton
                    controller={voiceControl}
                    type={"primary"}
                    size={"large"}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    textAlign: "center",
                }}
            >
                <span style={{ fontSize: "1.2rem", margin: "0 .5rem" }}>
                    Beats
                </span>
                <div>
                    <DecreaseButton
                        controller={beat}
                        step={STEP}
                        heldDelay={MEDIUM_HELD_DELAY}
                        size={"default"}
                        type="primary"
                        shape="circle"
                    />
                    <SubscribedValue controller={beat} />
                    <IncreaseButton
                        controller={beat}
                        step={STEP}
                        heldDelay={MEDIUM_HELD_DELAY}
                        size={"default"}
                        type="primary"
                        shape="circle"
                    />
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <SubscribedDuration
                    controller={duration}
                    available={options.duration.available}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "end",
                    textAlign: "center",
                }}
            >
                <SampleSelect
                    name={"Upbeat sound:"}
                    controller={upbeatSample}
                    available={options.sample.upbeat.available}
                />

                <SampleSelect
                    name={"Downbeat sound:"}
                    controller={downbeatSample}
                    available={options.sample.downbeat.available}
                />
            </div>
        </div>
    );
};

export default Metronome;
