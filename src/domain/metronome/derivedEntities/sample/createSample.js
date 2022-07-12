import createEntity from "../../entity/createEntity";
import ENTITY_TYPE from "../../entity/ENTITY_TYPE";
import sampleChecker from "./sampleChecker";

const createSample = (initialValue, available) => {
    return createEntity(
        ENTITY_TYPE.SETTABLE,
        initialValue,
        sampleChecker(available)
    );
};

export default createSample;