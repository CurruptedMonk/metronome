import { Select as AntdSelect } from "antd";

const Select = ({
    controller,
    available,
    currentValue,
    selectStyles,
    optionStyles,
}) => {
    return (
        <AntdSelect
            style={{ ...selectStyles }}
            value={currentValue}
            onChange={(value) => {
                controller.set(value);
            }}
        >
            {available.map((value) => (
                <AntdSelect.Option style={{ ...optionStyles }} key={value}>
                    {value}
                </AntdSelect.Option>
            ))}
        </AntdSelect>
    );
};

export default Select;
