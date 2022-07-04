import Select from "./Select";
import useSubscribe from "../../hooks/useSubscribe";

const NamedSelect = ({ name, controller, available }) => {
    const [currentValue] = useSubscribe(controller);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                flexWrap: "wrap"
            }}
        >
            <span style={{ fontSize: "1.2rem", margin: "0 .5rem" }}>
                {name}
            </span>
            <Select
                controller={controller}
                available={available}
                currentValue={currentValue}
                selectStyles={{ width: "8rem", fontSize: "1.2rem" }}
                optionStyles={{ fontSize: "1.2rem" }}
            />
        </div>
    );
};

export default NamedSelect;