import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value});
    }

    handleEmailChange(event) {
        const value = event.target.value;
        this.setState({email: value});
    }

    handleIsGoldClient(event) {
        const value = event.target.checked;
        this.setState({isGoldClient: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            isGoldClient: this.state.isGoldClient
        }
        this.props.updateUsers(user);
    }

    render() {
        return(
            <form className="form" onSubmit={(event) => {this.handleSubmit(event)}}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    onChange={(event) => {this.handleNameChange(event)}}
                    value={this.state.name}>
                </input>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    onChange={(event) => {this.handleEmailChange(event)}}
                    value={this.state.email}>
                </input>
                <label htmlFor="is-gold-client">Is Gold Client</label>
                <input 
                    type="checkbox" 
                    id="is-gold-client" 
                    onChange={(event) => {this.handleIsGoldClient(event)}}
                    checked={this.state.isGoldClient}>
                </input>
                <input id="add-user" type="submit" value="Add User"></input>
            </form>
        )
    }
}

export default UserAddForm;