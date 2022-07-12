import React, {useState} from "react";
import Button from "../button/Button";
import {Drawer} from "antd";
import CreateNewPresetModal from "../modal/CreateNewPresetModal";
import Preset from "./Preset";
import useSubscribe from "../../hooks/useSubscribe";

const PresetsDrawer = ({presets}) => {
    const [visible, setVisible] = useState(false);
    const [presetNames] = useSubscribe(presets);

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
                extra={<CreateNewPresetModal addNewPreset={presets.add} presets={presets}/>}
            >
                {presetNames?.map((name, index) =>
                    <Preset key={index} name={name} onDelete={() => presets.remove(name)}/>
                )}
            </Drawer>
        </>
    );
};

export default PresetsDrawer;