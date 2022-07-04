import SubscribedValue from "./SubscribedValue";

const BpmValue = ({bpmController}) => {
    return <SubscribedValue controller={bpmController} />;
};

const BeatValue = ({beatController}) => {
    return <SubscribedValue controller={beatController} />;
};

const DurationValue = ({durationController}) => {
    return <SubscribedValue controller={durationController} />;
};


export { BpmValue, BeatValue, DurationValue };