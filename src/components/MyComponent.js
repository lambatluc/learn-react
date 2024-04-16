import React from "react";


class MyComponent extends React.Component{
    state={
        name:'VuPhamAnh',
        address:'26 Nguyen Tao',
        age: 26
    }
    handleClick(event){
        console.log('Click me here my button')
        this.setState({
            name: 'Anhvune',
            age: Math.floor((Math.random()*100)+1)
        })
        // this.setState({
        //     age: Math.floor((Math.random()*100)+1)
        // })
        // console.log(event)
    }
    handleMouseOver(event){
        // console.log('Click me here my button')
        // console.log(event)
    }
    
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <button onClick={(event) =>{this.handleClick(event)}}>Click Me Please</button>
                <button onMouseOver={this.handleMouseOver}>Hover Me Please</button>
            </div>
        );
    }
}  
export default MyComponent;