import createEntity from "../../entity/createEntity";
import ENTITY_TYPE from "../../entity/ENTITY_TYPE";
import beatChecker from "./beatChecker";

const createBeat = (initialValue, range) => {
    return createEntity(
            ENTITY_TYPE.RANGE,
            initialValue,
            beatChecker(range)
        );
}

export default createBeat;