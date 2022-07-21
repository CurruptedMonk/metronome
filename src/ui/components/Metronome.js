import SubscribedSlider from "./slider/SubscribedSlider";
import { DecreaseButton, IncreaseButton } from "./button/buttons.js";
import { StartButton, TapButton, VoiceControlButton } from "./button/buttons";
import SubscribedImagedRadio from "./radio/SubscribedImagedRadio";
import NamedSelect from "./select/NamedSelect";
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
        <>
            <div className="wrapper tempo">
                <div>
                    <SubscribedValue subscribe={bpm.subscribe} unsubscribe={bpm.unsubscribe}/>
                    {" BPM"}
                </div>
                <div>
                    <SubscribedValue subscribe={beat.subscribe} unsubscribe={beat.unsubscribe} />
                    /
                    <SubscribedValue subscribe={duration.subscribe} unsubscribe={duration.unsubscribe} />
                </div>
            </div>

            <div className="wrapper">
                <DecreaseButton
                    controller={bpm}
                    step={STEP}
                    heldDelay={SMALL_HELD_DELAY}
                    size={"large"}
                    type="primary"
                    shape="circle"
                />
                <SubscribedSlider
                    className="slider"
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

            <div className="wrapper launcher">
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

            <div className="wrapper beat">
                <span className="text-medium">Beats</span>
                <div>
                    <DecreaseButton
                        controller={beat}
                        step={STEP}
                        heldDelay={MEDIUM_HELD_DELAY}
                        size={"default"}
                        type="primary"
                        shape="circle"
                    />
                    <SubscribedValue
                        subscribe={beat.subscribe}
                        unsubscribe={beat.unsubscribe}
                        className="text-medium small-side-margins"
                    />
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

            <div className="wrapper duration">
                <SubscribedImagedRadio
                    controller={duration}
                    available={options.duration.available}
                />
            </div>

            <div className="wrapper sample">
                <NamedSelect
                    name={"Upbeat:"}
                    controller={upbeatSample}
                    available={options.sample.upbeat.available}
                />

                <NamedSelect
                    name={"Downbeat:"}
                    controller={downbeatSample}
                    available={options.sample.downbeat.available}
                />
            </div>
        </>
    );
};

export default Metronome;
