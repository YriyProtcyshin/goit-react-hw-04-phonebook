import { Component } from "react";

export class TestForm extends Component{
    state = {
        name: "",
        password:""
    }

    onButtonClick =(event)=>{
        event.preventDefault()
        console.log(event.currentTarget)
           
    }


    render(){

        return (
            <form action="" onSubmit={this.onButtonClick}>
                <label htmlFor="" >
                    Name
                    <input type="text"  />
                </label>
                <label htmlFor="">
                    Password
                    <input type="password" />
                </label>
                <button type="submit">button</button>
            </form>
        )
    }
}