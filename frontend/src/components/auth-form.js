import React from 'react';

let emptyState = {
  username: '',
  password: '',
}

class AuthForm extends React.Component{
  constructor(props){
    super(props);

    this.state = emptyState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {name,value} = e.target;
    this.setState({[name]:value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  render(){
    return(
       <form onSubmit={this.handleSubmit}>
        <input
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
       </form>
    )
  }
}

export default AuthForm;