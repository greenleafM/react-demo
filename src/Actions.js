import * as ActionTypes from './AppAction';
import AppDispatcher from './AppDispatcher';

export const increment =(counterCaption) => {
    AppDispatcher.dispatch({
        type:ActionTypes.INCREMENT,
        counterCaption:counterCaption
    });
}

export const decrement = (counterCaption) =>{
    AppDispatcher.dispatch({
        type:ActionTypes.DECREMENT,
        counterCaption:counterCaption
    })
}
