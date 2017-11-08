import React, {Component as ReactComponent} from 'react';

export default (OriginComponent) => class WrappedComponent extends ReactComponent {

    state = {
       isOpen: true
    };

    render() {
        return <OriginComponent {...this.props} {...this.state} toggle = {this.toggle} />
    }

    toggle = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        console.log('---', ev.nativeEvent);

        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}