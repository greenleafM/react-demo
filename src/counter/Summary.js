import React from 'react';
import SummaryStore from './../store/SummaryStore';



class Summary extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this)
        this.state = {
            count:SummaryStore.getSummary()
        }
    }
    componentDidMount(){
        console.log("完成装载后..."+this.props.caption);
        SummaryStore.addChangeListener(this.onChange);
    }
    componentWillUnmount(){
        SummaryStore.removeChangeListener(this.onChange);
    }
    onChange(){
        const newCount = SummaryStore.getSummary();
        this.setState({count:newCount});
    }
    render(){
        return (<div>总计：{this.state.count}</div>)
    }

}

export default Summary;