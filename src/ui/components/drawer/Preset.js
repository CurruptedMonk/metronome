import React from "react";
import EditPresetNameModal from "../modal/EditPresetNameModal";
import DeletePresetModal from "../modal/DeletePresetModal";

const Preset = ({name, presetController, presetNames}) => {
    return (
        <div style={{display:"flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid black", marginBottom:".5rem"}}>
            <span>{name}</span>
            <div>
                <EditPresetNameModal name={name} presetNames={presetNames} editPreset={presetController.rename}/>
                <DeletePresetModal presetName={name} deletePreset={presetController.remove}/>
            </div>
        </div>
    );
};
export default Preset;