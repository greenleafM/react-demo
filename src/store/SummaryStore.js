import AppDispatcher from './../AppDispatcher';
import CounterStore from './CounterStore';
import * as ActionTypes from './../AppAction';
import EventEmitter from 'events';

function computedSummary(currentValues){
    let summary = 0;
    for(let key in currentValues){
        console.log(key);
        if(currentValues.hasOwnProperty(key)){
            summary += currentValues[key];
        }
    }
    return summary;
};


const SummaryStore = Object.assign({},EventEmitter.prototype,{
    getSummary(){
        return computedSummary(CounterStore.getCounterValues());
    },
    emitChange(){
        this.emit("CHANGE_EVENT");
    },
    addChangeListener(callback){
        this.on("CHANGE_EVENT",callback);
    },
    removeChangeListener(callback){
        this.removeListener("CHANGE_EVENT",callback);
    }

});

SummaryStore.dispatchToken = AppDispatcher.register((action) =>{
    if(action.type === ActionTypes.INCREMENT || action.type === ActionTypes.DECREMENT){
        AppDispatcher.waitFor([CounterStore.dispatchToken]);
        SummaryStore.emitChange();
    }
});

export default SummaryStore;