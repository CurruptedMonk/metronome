import Button from "./Button";
import KeyboardControlledButton from "./decorators/KeyboardControlledButtonDecorator";
import SubscribedButton from "./decorators/CheckboxedButtonDecorator";
import onTap from "../../handlers/onTap";
import onHeld from "../../handlers/onHeld";
import {
    AudioMutedOutlined,
    AudioOutlined,
    PlayCircleFilled,
    PauseCircleFilled,
    MinusOutlined,
    PlusOutlined,
} from "@ant-design/icons";

const TapButton = ({ controller, keyboardEvent, keyboardKeys }) => {
    return (
        <KeyboardControlledButton
            keyboardEvent={keyboardEvent}
            keyboardKeys={keyboardKeys}
            onClick={() => onTap(controller.set)}
            size={"large"}
            type="primary"
        >
            <Button>Tap</Button>
        </KeyboardControlledButton>
    );
};

const VoiceControlButton = ({ controller, keyboardEvent, keyboardKeys }) => {
    return (
        <SubscribedButton
            keyboardEvent={keyboardEvent}
            keyboardKeys={keyboardKeys}
            controller={controller}
            onClick={controller.toggle}
            size={"large"}
            type={"primary"}
            activeProps={{
                icon: <AudioMutedOutlined />,
                text: "Off",
            }}
            notActiveProps={{
                icon: <AudioOutlined />,
                text: "On",
            }}
        >
            <KeyboardControlledButton>
                <Button></Button>
            </KeyboardControlledButton>
        </SubscribedButton>
    );
};

const StartButton = ({ controller, keyboardEvent, keyboardKeys }) => {
    return (
        <SubscribedButton
            keyboardEvent={keyboardEvent}
            keyboardKeys={keyboardKeys}
            controller={controller}
            type={"primary"}
            size={"large"}
            activeProps={{
                icon: <PauseCircleFilled />,
                onClick: controller.stop,
                text: "Stop",
            }}
            notActiveProps={{
                icon: <PlayCircleFilled />,
                onClick: controller.play,
                text: "Play",
            }}
        >
            <KeyboardControlledButton>
                <Button></Button>
            </KeyboardControlledButton>
        </SubscribedButton>
    );
};

const DecreaseButton = ({ controller, step, heldDelay, ...props }) => {
    return (
        <Button
            onMouseDown={(e) =>
                onHeld(e, controller.decreaseBy.bind(null, step), heldDelay)
            }
            icon={<MinusOutlined />}
            {...props}
        />
    );
};

const IncreaseButton = ({ controller, step, heldDelay, ...props }) => {
    return (
        <Button
            onMouseDown={(e) =>
                onHeld(e, controller.increaseBy.bind(null, step), heldDelay)
            }
            icon={<PlusOutlined />}
            {...props}
        />
    );
};

export {
    TapButton,
    VoiceControlButton,
    StartButton,
    DecreaseButton,
    IncreaseButton,
};
