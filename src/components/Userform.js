import React from 'react';

export default class Userform extends React.Component {

    state = {
        username: ''
    };

    render() {
        return (<div>
            Name: <input type="text"
                         value={this.state.username}
                         onChange={this.handleUsernameChange} />
        </div>
        )
    }

    handleUsernameChange = (ev) => {
        if (ev.target.value.length > 10) return;
        console.log('event = ', ev.target.value);
        this.setState({
            username: ev.target.value
        });
    }

}