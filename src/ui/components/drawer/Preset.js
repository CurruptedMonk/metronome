import React from "react";
import Button from "../button/Button";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const Preset = ({name, onDelete}) => {
    return (
        <div style={{display:"flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid black", marginBottom:".5rem"}}>
            <span>{name}</span>
            <div>
                <Button
                    type="default"
                    icon={<DeleteOutlined />}
                    onClick={onDelete}
                />
            </div>
        </div>
    );
};

export default Preset;