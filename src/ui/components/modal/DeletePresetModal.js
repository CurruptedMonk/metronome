import React, {useState} from "react";
import Button from "../button/Button";
import {DeleteOutlined} from "@ant-design/icons";
import {Modal} from "antd";

const DeletePresetModal = ({presetName, deletePreset}) => {
    const [visible, setVisible] = useState(false);

    const onOpen = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onDelete = () => {
        deletePreset(presetName);
        onClose();
    };

    return (
        <>
            <Button
                type="default"
                icon={<DeleteOutlined />}
                onClick={onOpen}
            />
            <Modal
                title="Delete preset"
                visible={visible}
                onOk={onDelete}
                onCancel={onClose}
                footer={[
                    <Button key="back" onClick={onClose}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        onClick={onDelete}
                    >
                        Delete
                    </Button>,
                ]}
            >
                <p>Do you really want to delete the preset "{presetName}" ?</p>
            </Modal>
        </>
    );
};

export default DeletePresetModal;
