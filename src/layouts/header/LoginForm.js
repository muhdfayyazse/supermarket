import React from 'react';
import { Link } from 'react-router-dom';




class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    }
    emailChangeHandler = (event) =>{
        this.setState({email:event.target.value})
    }
    passwordChangeHandler = (event) =>{
        this.setState({password:event.target.value})
    }

    toggle=()=>{
        this.props.onCallToggle();
    }
    doLogin = (event)=>{
        event.preventDefault();
        console.log(this.state.email);
        this.props.onCallToggle();
    }
    render() {
        return (
            <form>
            <div class="form-group">
                <label>Email address</label>
                <input type="text" class="form-control" placeholder="Enter email" value={this.state.email} onChange={this.emailChangeHandler}></input>
            </div>
            <div class="form-group">
                <label>Password </label>
                <input type="text" class="form-control" placeholder="Password" value={this.state.password} onChange={this.passwordChangeHandler}></input>
            </div>

            <div class="form-group">
                <Link className="btn btn-primary mt-1"onClick={this.doLogin}>Log in</Link>
                <Link className="btn btn-secondary ml-2 mt-1" onClick={this.toggle} >Cancel</Link>
            </div>
        </form>
        )
    }

};

export default LoginForm;
