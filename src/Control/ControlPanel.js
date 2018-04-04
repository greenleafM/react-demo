import React from 'react';
import Counter from "../counter/Counter";

class ControlPanel extends React.Component{

    render(){
        console.log("enter force update");
        return (
            <div>
                <Counter caption="First Section" />
                <Counter caption="Second Section" />
                <Counter caption="Third Section" />

                <button type="button" onClick={() => this.forceUpdate()}>更新</button>
            </div>
        )
    }

}