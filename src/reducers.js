import { combineReducers } from 'redux';

import { CHANGE_SLIDE } from './actions';

const slides = (state=[], action) => {
    switch(action.type){
        default:
            return state;
    }
};

const pagination = (
    state={
        currentSlide: 0
    },
    action
) => {
    switch(action.type){
        case CHANGE_SLIDE:
            return {
                currentSlide: action.currentSlide
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    slides,
    pagination
});

export default rootReducer;
