import React from "react";


class MyComponent extends React.Component{
    state={
        name:'VuPhamAnh',
        address:'26 Nguyen Tao',
        age: 26
    }
    
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}  
export default MyComponent;