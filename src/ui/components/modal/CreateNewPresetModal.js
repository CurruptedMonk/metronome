import {useState} from "react";
import Button from "../button/Button";
import {Input, Modal} from "antd";

const CreateNewPresetModal = ({addNewPreset, presets}) => {
    const [visible, setVisible] = useState(false);
    const [newPreset, setNewPreset] = useState("");

    const onShow = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
        setNewPreset("");
    };

    const onSave = () => {
        addNewPreset(newPreset);
        setNewPreset("");
        onClose();
    };

    const isValid = !presets.has(newPreset);

    return (
        <>
            <Button type="primary" onClick={onShow}>Create new</Button>
            <Modal
                title="Create new preset"
                visible={visible}
                onOk={onSave}
                onCancel={onClose}
                footer={[
                    <Button key="back" onClick={onClose}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        onClick={onSave}
                        disabled={!isValid || newPreset === ""}
                    >
                        Save
                    </Button>,
                ]}
            >
                <Input
                    status={isValid ? "default" : "error"}
                    placeholder="Preset name"
                    onChange={(e) => setNewPreset(e.target.value)}
                    onKeyDown={e => e.stopPropagation()}
                    onKeyUp={e => e.stopPropagation()}
                    value={newPreset}
                />
                <p className={"ant-form-item-explain-error " + (isValid ? "invisible" : "") }>Name is already exists</p>
            </Modal>
        </>
    );
};

export default CreateNewPresetModal;