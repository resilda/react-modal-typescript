import * as actionTypes from './actionTypes';
import { AllProps } from './modalContentTypes';

const initialState: AllProps = {
    content: []
}

function modalContentReducer(state = initialState, action: any) {
    if(action.type === actionTypes.SELECTED_ELEMENT) {
        // return {...state, action.payload}
    }
    if(action.type === actionTypes.ALL_SELECTED_ELEMENTS) {
        return 
    }
}