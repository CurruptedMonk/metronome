import React, {useState} from "react";
import Button from "../button/Button";
import {Drawer, Radio} from "antd";
import CreateNewPresetModal from "../modal/CreateNewPresetModal";
import Preset from "./Preset";
import useSubscribe from "../../hooks/useSubscribe";

const PresetsDrawer = ({presetController}) => {
    const [visible, setVisible] = useState(false);
    const [presetNames] = useSubscribe(presetController.subscribeToCollection, presetController.unsubscribeFromCollection);
    const [currentPreset] = useSubscribe(presetController.subscribe, presetController.unsubscribe);

    const onShow = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="default" onClick={onShow}>Presets</Button>
            <Drawer
                title="Metronome presets"
                placement="right"
                size="default"
                onClose={onClose}
                visible={visible}
                extra={<CreateNewPresetModal presetController={presetController}/>}
            >

                {presetNames?.map((name) =>
                    <Radio.Button
                        className="preset"
                        checked={name === currentPreset}
                        key={name}
                        value={name}
                        onChange={() => presetController.set(name)}
                    >
                        <Preset
                            key={name}
                            name={name}
                            presetController={presetController}
                            presetNames={presetNames}
                        />
                    </Radio.Button>
                )}
            </Drawer>
        </>
    );
};

export default PresetsDrawer;