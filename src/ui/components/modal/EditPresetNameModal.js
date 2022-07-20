import Button from "../button/Button";
import {Input, Modal} from "antd";
import {EditOutlined} from "@ant-design/icons";
import React, {useState} from "react";

const EditPresetNameModal = ({name, presetNames, editPreset}) => {
    const [visible, setVisible] = useState(false);
    const [newPresetName, setNewPresetName] = useState(name);

    const onEdit = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onSave = () => {
        editPreset(name, newPresetName);
        onClose();
    };

    const isValid = !presetNames.filter(p => p !== name).includes(newPresetName);
    return (
        <>
            <Button
                type="default"
                icon={<EditOutlined />}
                onClick={onEdit}
            />
            <Modal
                title="Edit preset name"
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
                        disabled={!isValid || newPresetName === ""}
                    >
                        Save
                    </Button>,
                ]}
            >
                <Input
                    status={isValid ? "default" : "error"}
                    placeholder="Preset name"
                    onChange={(e) => setNewPresetName(e.target.value)}
                    onKeyDown={e => e.stopPropagation()}
                    onKeyUp={e => e.stopPropagation()}
                    value={newPresetName}
                />
                <p className={"ant-form-item-explain-error " + (isValid ? "invisible" : "") }>Name is already exists</p>
            </Modal>
        </>
    );
};

export default  EditPresetNameModal;