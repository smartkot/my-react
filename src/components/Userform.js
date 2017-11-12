import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import "react-day-picker/lib/style.css";
import './styles.css';

export default class Userform extends React.Component {

    state = {
        user: '',
        text: '',

        symbolCount: 10,
        symbolsRemained: 10,
        selectedDay: undefined,
    };

    render() {
        const valueSelectedDay = this.state.selectedDay
            ? this.state.selectedDay.format('DD/MM/YYYY')
            : '';

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="user">User</label>
                <input id="user"
                       name="user"
                       type="text"
                       value={this.state.user}
                       className = {this.getClassName('user')}
                       onChange = {this.handleChange('user')} />
                <label htmlFor="text">Text</label>
                <textarea id="text"
                          name="text"
                          cols="30"
                          rows="3"
                          value={this.state.text}
                          className = {this.getClassName('text')}
                          onChange={this.handleChange('text')}></textarea>
                <div>Осталось символов: {this.state.symbolsRemained}</div>
                <DayPickerInput
                    name="birthday"
                    placeholder="DD/MM/YYYY"
                    format="DD/MM/YYYY"
                    value={valueSelectedDay}
                    onDayChange={this.handleDayChange}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.setState({
            user: '',
            text: ''
        })
    };

    getClassName = (type) => this.state[type].length &&
        this.state[type].length < this.limits[type].min ? 'form-field__error' : '';

    limits = {
        'user': {
            min: 2,
            max: 10,
        },
        'text': {
            min: 5,
            max: 20,
        },
    };

    handleChange = (type) => (ev) => {
        const {value} = ev.target;
        if (value.length > this.limits[type].max) return;
        // if (value.length > this.limits[type] * 0.8) ev.target.style.color = 'red';
        this.setState({
            [type]: value
        });
    };

    handleDayChange = selectedDay => {
        this.setState({ selectedDay });
    };

}