import { pagesDictionaryInstance, initialStatePage } from "../utils/consts";

export const page = (state=initialStatePage, action)=>{
    if (Object.keys(pagesDictionaryInstance).includes(action?.type)) {
        state = pagesDictionaryInstance[action?.type](action.payload);
        return state;
    }
    return state;
}