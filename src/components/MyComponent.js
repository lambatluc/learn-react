import React from "react";


class MyComponent extends React.Component{
    state={
        name:'VuPhamAnh',
        address:'26 Nguyen Tao',
        age: 26
    }
    handleClick(event){
        console.log('Click me here my button')
        // console.log(event)
    }
    handleMouseOver(event){
        // console.log('Click me here my button')
        console.log(event)
    }
    
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>Click Me Please</button>
                <button onMouseOver={this.handleMouseOver}>Hover Me Please</button>
            </div>
        );
    }
}  
export default MyComponent;