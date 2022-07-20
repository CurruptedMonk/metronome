import Select from "./Select";
import useSubscribe from "../../hooks/useSubscribe";

const NamedSelect = ({ name, controller, available }) => {
    const [currentValue] = useSubscribe(controller.subscribe, controller.unsubscribe);

    return (
        <div className="select-wrapper ">
            <span className="text-medium small-side-margins">{name}</span>
            <Select
                controller={controller}
                available={available}
                currentValue={currentValue}
            />
        </div>
    );
};

export default NamedSelect;
