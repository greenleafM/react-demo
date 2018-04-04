import React from 'react';
import Counter from "./Counter";
import Summary from './Summary';

class CounterPanel extends React.Component{
    render(){
        console.log("强制更新数据信息");
        const style = {
            width:"300px",
            margin:"30px auto",
            padding:0,
            textAlign:"left"
        }

        // return (
        //     <div style={style}>
        //         <p style={err}>你当前的数据可能有误，请及时修正。</p>
        //         {/*<Counter caption="First Section" initValue={this.initValue[0]} onUpdate={this.onCounterChanged}/>*/}
        //         {/*<Counter caption="第二个" initValue={this.initValue[1]} onUpdate={this.onCounterChanged}/>*/}
        //         {/*<Counter caption="第三个" initValue={this.initValue[2]} onUpdate={this.onCounterChanged}/>*/}
        //         {/*<Counter caption="第四个" initValue={this.initValue[3]} onUpdate={this.onCounterChanged}/>*/}
        //         {/*<Counter caption="第五个" initValue={this.initValue[4]} onUpdate={this.onCounterChanged}/>*/}
        //         <p>总值是：{this.state.sum}</p>
        //         <button type="button" onClick={()=>this.forceUpdate()}>更新</button>
        //     </div>
        // )
        return (
            <div style={style}>
                <Counter caption="中国"/>
                <Counter caption="日本"/>
                <Counter caption="韩国"/>
                {/*<Counter caption="Second Section"/>*/}
                {/*<Counter caption="Third Section"/>*/}
                <hr/>
                <Summary />
            </div>
        )
    }
}

export default CounterPanel;