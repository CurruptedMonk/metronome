import SubscribedSelect from "./SubscribedSelect";
import useSubscribe from "../../hooks/useSubscribe";

const SampleSelect = ({ name, controller, available }) => {
    const [currentValue] = useSubscribe(controller);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <span style={{ fontSize: "1.2rem", margin: "0 .5rem" }}>
                {name}
            </span>
            <SubscribedSelect
                controller={controller}
                available={available}
                currentValue={currentValue}
                selectStyles={{ width: "8rem", fontSize: "1.2rem" }}
                optionStyles={{ fontSize: "1.2rem" }}
            />
        </div>
    );
};

export default SampleSelect;