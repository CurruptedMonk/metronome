import Select from "./Select";
import useSubscribe from "../../hooks/useSubscribe";

const NamedSelect = ({ name, controller }) => {
    const [currentValue] = useSubscribe(controller.subscribe, controller.unsubscribe);
    const [available] = useSubscribe(controller.subscribeToCollection, controller.unsubscribeFromCollection);

    return (
        <div className="select-wrapper ">
            <span className="text-medium small-side-margins">{name}</span>
            <Select
                set={controller.set}
                available={available}
                currentValue={currentValue}
            />
        </div>
    );
};

export default NamedSelect;
