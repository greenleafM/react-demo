import React from 'react';
import PropTypes from 'prop-types';
import CounterStore from './../store/CounterStore';
import * as Actions from './../Actions'


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);

        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        // this.state = {
        //     count:props.initValue
        // };
        // console.log("constrctor in here"+props.caption);
        this.state = {
            count:CounterStore.getCounterValues()[props.caption]
        }

    }
    componentWillMount(){
        console.log("正在装载中，请稍后..."+this.props.caption)
    }
    componentDidMount(){
        console.log("完成装载后..."+this.props.caption);
        CounterStore.addChangeListener(this.onChange);
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        console.log("强制更新数据时调用");
        console.log("enter component will receive props"+this.props.caption);
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("即将有更新的数据。。。。。。 。。");
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    }
    componentWillUpdate(){
        console.log("组件即将更新时，调用此方法");

    }
    componentDidUpdate(){
        console.log("组件更新完成时，调用此方法");

    }
    componentWillUnmount(){
        console.log("组件即将卸载时，调用此方法");
        CounterStore.removeChangeListener(this.onChange);
    }


    onClickIncrementButton(){
        // this.setState({
        //     count:this.state.count+1
        // });
        // this.onUpdateCount(false);
        Actions.increment(this.props.caption);
    }
    onClickDecrementButton(){
        // this.setState({
        //     count:this.state.count-1
        // })
        // this.onUpdateCount(true);
        Actions.decrement(this.props.caption);
    }

    onUpdateCount(isDecrement){
        const preValue = this.state.count;
        console.log(preValue);
        const newValue = isDecrement? (preValue - 1):(preValue + 1);
        console.log(newValue);
        if(newValue >= 0){
            this.setState({
                count:newValue
            });
        }
        this.props.onUpdate(preValue,newValue);

    }
    onChange(){
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count:newCount});
    }
    render(){
        console.log("render "+this.props.caption);
        return (
            <div>
                <button onClick={this.onClickIncrementButton}>+</button>&nbsp;&nbsp;
                <button onClick={this.onClickDecrementButton}>-</button>
                <span>{ this.props.caption} count:{this.state.count}</span>
            </div>
        )

    }
}
Counter.defaultProps = {
    initValue:20,
    onUpdate:f => f
}

Counter.propTypes = {
    caption:PropTypes.string.isRequired,
    initValue:PropTypes.number,
    onUpdate:PropTypes.func
}

export default Counter;