import React from "react"

export default class Login extends React.Component {
    state = {
        name: "",
        password: "",
        remember: false
    }
    handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState(prev => {
            return { [name]: value }
        })
    }

    render() {
        return (
            <div>
                <label for="name">Name </label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInput}></input>
                <br></br>
                <label for="password">Password </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleInput}></input>
                <br></br>
                <label for="remember">Remember </label>
                <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleInput}></input>
            </div>
        )
    }
}