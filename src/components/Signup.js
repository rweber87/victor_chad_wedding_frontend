import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { signUp } from '../api/index.js'

class Signup extends Component {

	constructor(){
		super()

		this.state = {
			first_name: '',
			password: '',
			password_confirmation: '',
			last_initial: '',
		}
	}

	handleInputChange(props, value){
		this.setState({
			[props]: value
		})
	}

	handleSubmit(e){
		e.preventDefault()
		if(this.state.password !== this.state.password_confirmation){
			alert("Password does not match password confirmation")
			return
		}
		signUp(this.state)
		.then(res => {
			if(res.error){
				return this.props.history.push('/signup')
			}
			localStorage.setItem('token', res.token)
			this.props.history.push('/')
		})
		this.setState({
			first_name: '',
			password: '',
			password_confirmation: '',
			last_initial: '',
		})
	}

	render(){
		return(
			<div id='body-text' className='container'>
		        <div id='wedding-card'>
		        	<div id='wedding-text'>
			        	<div className='container'>	
			        	<h2>Signup</h2>		
			        		<form id='signup-form' className='Signup' onSubmit={this.handleSubmit.bind(this)}>
			        			<input id='form-input' placeholder='First Name:' type='text' onChange={ e => this.handleInputChange('first_name', e.target.value)} />
			        			<label id='form-input'>First Name:</label>
			        			<input id='form-input' placeholder='Last Initial:' type='text' onChange={ e => this.handleInputChange('last_initial', e.target.value)} />
			        			<label id='form-input'>Last Initial:</label>
			        			<input id='form-input' placeholder='Password:' type='password' onChange={ e => this.handleInputChange('password', e.target.value)} />
			        			<label id='form-input'>Password:</label>
			        			<input id='form-input' placeholder='Password Confirmation:' type='password' onChange={ e => this.handleInputChange('password_confirmation', e.target.value)} />
			        			<label id='form-input'>Password Confirmation:</label>
			        			<br/>
			        			<br/>
			        			<br/>
			        			<br/>
			        			<Button className='button' waves='light'>Submit<Icon left>save</Icon></Button>
			        			<br/>
			        			<br/>
			        		</form>
			        	</div>
		        	</div>
		        </div>
		    </div>
		)
	}
}

export default Signup