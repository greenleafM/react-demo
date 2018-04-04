import EventEmitter from "events";
import AppDispatcher from './../AppDispatcher';
import * as ActionTypes from './../AppAction';

// const counterValues = {
//     "First Section":12,
//     "Second Section":23,
//     "Third Section":46
// }
const counterValues = {
    "中国":12,
    "日本":23,
    "韩国":46
}

const CounterStore = Object.assign({},EventEmitter.prototype,{
    getCounterValues(){
        return counterValues;
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
})

CounterStore.dispatchToken = AppDispatcher.register((action) =>{
        if(action.type === ActionTypes.INCREMENT){
            counterValues[action.counterCaption]++;
            CounterStore.emitChange();
        }else if(action.type === ActionTypes.DECREMENT){
            counterValues[action.counterCaption]--;
            CounterStore.emitChange();
        }
});

export default CounterStore;
