import React, {useState} from "react";
import Button from "../button/Button";
import {Drawer} from "antd";
import CreateNewPresetModal from "../modal/CreateNewPresetModal";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import Preset from "./Preset";

const PresetsDrawer = () => {
    const [visible, setVisible] = useState(false);
    const [presets, setPreset] = useState(new Set(["base", "tremolo"]));

    const onShow = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const addNewPreset = (newPreset) => {
        setPreset(prev => new Set([...prev, newPreset]));
    };

    const deletePreset = (preset) => {
        setPreset(prev => new Set([...prev].filter(item => item !== preset)));
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
                extra={<CreateNewPresetModal addNewPreset={addNewPreset} presets={presets}/>}
            >
                {[...presets].map((preset, index) =>
                    <Preset key={index} name={preset} onDelete={() => deletePreset(preset)}/>
                )}
            </Drawer>
        </>
    );
};

export default PresetsDrawer;