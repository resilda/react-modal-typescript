import * as actionTypes from './actionTypes';
import { Props, AllProps } from './modalContentTypes';

export function selectedElement(props: Props)  {
    return {
        type: actionTypes.SELECTED_ELEMENT,
        payload: props.id
    }
}

export function allSelectedElements(allProps: AllProps) {
    return {
        type: actionTypes.ALL_SELECTED_ELEMENTS,
        paylaod: allProps.content
    }
}