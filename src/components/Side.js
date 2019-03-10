import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Side extends Component {
    onValueChanged = (event) => {
        const parsedValue = this.inputValidator(event.target.value)
        this.props.onValueChanged(parsedValue);
    }

    // Input validator is needed because an input of type number does not handle gracefully dashes.
    inputValidator = (value) => {
        value = value.replace('/^[\d+\]/', '');  
        
        if (parseFloat(value) !== 0 && !isNaN(parseFloat(value))) {
            return parseFloat(value);
        } else {
            return "";
        }
    }

    render() {
        return (
            <div className="side">
                <label className={this.props.isError ? "ts-error" : {}}>
                    <span>{this.props.label}</span>
                    <input
                        placeholder="Pick an integer number greater than 0"
                        value={this.props.value}
                        onChange={this.onValueChanged} />
                </label>
            </div>
        );
    }
}

Side.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    isError: PropTypes.bool,
    onValueChanged: PropTypes.func.isRequired,
}

export default Side;