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
    handleOnChangeInput= (event) =>{
        this.setState({
            name:event.target.value
        })
    }
    handleOnSubmit= (event) =>{
        event.preventDefault();
        console.log(this.state)
    }
    
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <input type="text"
                    onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}  
export default MyComponent;