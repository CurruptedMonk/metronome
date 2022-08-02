import React from "react";
import EditPresetNameModal from "../modal/EditPresetNameModal";
import DeletePresetModal from "../modal/DeletePresetModal";

const Preset = ({name, presetController, presetNames}) => {
    return (
        <div style={{display:"flex", alignItems: "center", justifyContent: "space-between", margin: ".2rem 0"}}>
            <span style={{overflowWrap: "anywhere"}}>{name}</span>
            <div style={{display: "flex"}}>
                <EditPresetNameModal name={name} presetNames={presetNames} editPreset={presetController.rename}/>
                <DeletePresetModal presetName={name} deletePreset={presetController.remove}/>
            </div>
        </div>
    );
};
export default Preset;