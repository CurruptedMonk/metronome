import { Select as AntdSelect } from "antd";

const Select = ({
    controller,
    available,
    currentValue,
}) => {
    return (
        <AntdSelect
            className="select"
            value={currentValue}
            onChange={(value) => {
                controller.set(value);
            }}
        >
            {available.map((value) => (
                <AntdSelect.Option key={value}>
                    {value}
                </AntdSelect.Option>
            ))}
        </AntdSelect>
    );
};

export default Select;
