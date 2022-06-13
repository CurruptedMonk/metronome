import createEntity from "../../entity/createEntity";
import ENTITY_TYPE from "../../entity/ENTITY_TYPE";
import durationChecker from "./durationChecker";

const createDuration = (initialValue, available) => {
    return createEntity(
        ENTITY_TYPE.RANGE,
        initialValue,
        durationChecker(available)
    );
};

export default createDuration;