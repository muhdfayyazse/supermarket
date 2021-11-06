import React from 'react';
import { Link } from 'react-router-dom';




class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            password:'',
            confirmPassword:''
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.confirmPasswordChangeHandler = this.confirmPasswordChangeHandler.bind(this);
    }
    nameChangeHandler = (event) =>{
        this.setState({name:event.target.value})
    }
    emailChangeHandler = (event) =>{
        this.setState({email:event.target.value})
    }
    passwordChangeHandler = (event) =>{
        this.setState({password:event.target.value})
    }
    confirmPasswordChangeHandler = (event) =>{
        this.setState({confirmPassword:event.target.value})
    }

    toggle=()=>{
        this.props.onCallToggle();
    }
    doRegister = (event)=>{
        event.preventDefault();
        console.log(this.state.name);
        this.props.onCallToggle();
    }
    render() {
        return (
            <form> 
            <div class="form-group">
                <label>Name</label>
                <input id="name" name="name" type="text"  class="form-control" placeholder="Name" value={this.state.name} onChange={this.nameChangeHandler}></input>
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input id="email" name="email" type="email" class="form-control" placeholder="Enter email" value={this.state.email} onChange={this.emailChangeHandler}></input>
            </div>
            <div class="form-group">
                <label>Password </label>
                <input id="password" name="password" type="password" class="form-control" placeholder="Password" value={this.state.password} onChange={this.passwordChangeHandler}></input>
            </div>
            <div class="form-group">
                <label>Confirm Password </label>
                <input id="confirmpassword" name="confirmpassword" type="password" class="form-control" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.confirmPasswordChangeHandler}></input>
            </div>
            <div class="form-group">
                <Link className="btn btn-primary" onClick={this.doRegister}>Register</Link>
                <Link className="btn btn-secondary ml-2" onClick={this.toggle} >Cancel</Link>
            </div>
            {/* <p className="mb-0">Already have account? <Link to="#" className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.logintoggle('1'); }} > SignIn </Link> here </p> */}
        </form>
        )
    }

};

export default RegisterForm;
