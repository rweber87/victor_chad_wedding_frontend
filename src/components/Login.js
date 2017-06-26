import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { login } from '../api/index.js'

class Login extends Component {

	constructor(){
		super()

		this.state = {
			first_name: '',
			password: '',
			last_initial: '',
			v_or_c: ''

		}
	}

	handleInputChange(props, value){
		this.setState({
			[props]: value
		})
	}

	handleSubmit(e){
		e.preventDefault()
		login(this.state)
		.then(res => {
			if(res.error){
				return this.props.history.push('/login')
			}
			localStorage.setItem('token', res.token)
			this.props.history.push('/')
		})
		this.setState({
			first_name: '',
			password: '',
			last_initial: '',
			v_or_c: ''
		})
	}

	render(){
		return(
			<div id='body-text' className='container'>
		        <div id='wedding-card'>
		        	<div id='wedding-text'>
			        	<div className='container'>
			        			<br/>
			        			<br/>
			        			<br/>	
			        		<h2>Login</h2>	
			        		<form className='Login' onSubmit={this.handleSubmit.bind(this)}>
			        			<input id='form-input' className='input-field' placeholder='First Name:' type='text' onChange={ e => this.handleInputChange('first_name', e.target.value)} />
			        			<label id='form-input'>First Name:</label>
			        			<input id='form-input' className='input-field' placeholder='Last Initial:' type='text' onChange={ e => this.handleInputChange('last_initial', e.target.value)} />
			        			<label id='form-input'>Last Initial:</label>
			        			<input id='form-input' className='input-field' placeholder='Password:' type='password' onChange={ e => this.handleInputChange('password', e.target.value)} />
			        			<label id='form-input'>Password:</label>
			        			<br/>
			        			<br/>
			        			<br/>
			        			<br/>
			        			<Button className='button' waves='light'>Submit<Icon left>save</Icon></Button>
			        		</form>
			        		<a href='/signup'>No Account? Signup</a>
			        	</div>
		        	</div>
		        </div>
		    </div>
		)
	}
}

export default Login