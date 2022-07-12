import createEntity from "../../entity/createEntity";
import ENTITY_TYPE from "../../entity/ENTITY_TYPE";
import bpmChecker from "./bpmChecker";

const createBpm = (initialValue, range) => {
    return createEntity(
        ENTITY_TYPE.RANGE,
        initialValue,
        bpmChecker(range)
    );
};

export default createBpm;