import settableEntity from "./settable/settableEntity";
import rangeEntity from "./range/rangeEntity";
import ENTITY_TYPE from "./ENTITY_TYPE";

const checkType = (type) => Object.values(ENTITY_TYPE).includes(type);

const createEntity = (type, initialValue, checker) => {
    if(!checkType(type)) throw new Error("Invalid type was passed");

    if(type === ENTITY_TYPE.SETTABLE) {
        return settableEntity(initialValue, checker);
    }
    if(type === ENTITY_TYPE.RANGE) {
        return rangeEntity(initialValue, checker);
    }
};

export default createEntity;