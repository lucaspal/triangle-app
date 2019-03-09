import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Side extends Component {
    state = {
        value: ''
    };

    onValueChanged = (event) => {
        this.setState({ value: event.target.valueAsNumber });
        this.props.onValueChanged(event.target.valueAsNumber | 0);
    }

    render() {
        return (
            <div>
                <label className={this.props.isError ? "ts-error" : {}}>
                    <span>{this.props.label}</span>
                    <input type="number" value={this.props.value} onChange={this.onValueChanged} />
                </label>
            </div>
        );
    }
}

Side.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isError: PropTypes.bool,
    onValueChanged: PropTypes.func.isRequired,
}

export default Side;