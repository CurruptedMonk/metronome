import { Select as AntdSelect } from "antd";

const Select = ({
    set,
    available,
    currentValue,
}) => {
    return (
        <AntdSelect
            className="select"
            value={currentValue}
            onChange={(value) => {
                set(value);
            }}
            placeholder="none"
        >
            {available?.map((value) => (
                <AntdSelect.Option key={value}>
                    {value}
                </AntdSelect.Option>
            ))}
        </AntdSelect>
    );
};

export default Select;
