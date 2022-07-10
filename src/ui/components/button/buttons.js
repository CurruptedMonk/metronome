import Button from "./Button";
import onTap from "../../handlers/onTap";
import onHeld from "../../handlers/onHeld";
import KeyboardControlledButtonDecorator from "../../decorators/button/KeyboardControlledButtonDecorator";
import CheckboxedButtonDecorator from "../../decorators/button/CheckboxedButtonDecorator";
import {
    AudioMutedOutlined,
    AudioOutlined,
    PlayCircleFilled,
    PauseCircleFilled,
    MinusOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import partial from "../../../lib/partial";

const StartButton = ({ controller, ...props }) =>
    KeyboardControlledButtonDecorator({
        Component: CheckboxedButtonDecorator({
            Component: <Button {...props} />,
            controller: controller,
            activeProps: {
                icon: <PauseCircleFilled />,
                onClick: controller.stop,
                text: "Stop",
            },
            notActiveProps: {
                icon: <PlayCircleFilled />,
                onClick: controller.play,
                text: "Play",
            },
        }),
        keyboardEvent: "keyup",
        keyboardKeys: [" ", "spacebar"],
    });

const TapButton = ({ controller, ...props }) =>
    KeyboardControlledButtonDecorator({
        Component: (
            <Button {...props} onClick={() => onTap(controller.set)}>
                Tap
            </Button>
        ),
        keyboardEvent: "keydown",
        keyboardKeys: ["q"],
    });

const VoiceControlButton = ({ controller, ...props }) =>
    KeyboardControlledButtonDecorator({
        Component: CheckboxedButtonDecorator({
            Component: <Button {...props} onClick={controller.toggle} />,
            controller: controller,
            activeProps: {
                icon: <AudioMutedOutlined />,
                text: "Off",
            },
            notActiveProps: {
                icon: <AudioOutlined />,
                text: "On",
            },
        }),
        keyboardEvent: "keyup",
        keyboardKeys: ["m"],
    });

const DecreaseButton = ({ controller, step, heldDelay, ...props }) => {
    return (
        <Button
            onMouseDown={(e) =>
                onHeld(e, partial(controller.decreaseBy, step), heldDelay)
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
                onHeld(e, partial(controller.increaseBy, step), heldDelay)
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
