import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC';

class Counter extends Component {
    static PropTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render() {
        return(
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick = {this.handleIncrement}>IncrementMe</button>
            </div>
        );
    }

    handleIncrement = () => {
        console.log('---', 'incrementing');
        const {increment} = this.props;

        increment();
    }
}

// function mapStateToProps(state) {
//     console.log(state);
//     return {
//         counter: state.count
//     }
// }
//
// const mapToDispatch = {
//     dispatchIncrement: increment
// };
//
// const decorator = connect(mapStateToProps, mapToDispatch);

export default connect((state) => ({
    counter: state.count
}), { increment })(Counter);