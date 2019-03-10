import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Side extends Component {
    onValueChanged = (event) => {
        this.props.onValueChanged(event.target.valueAsNumber || "" );
    }

    render() {
        return (
            <div className="side">
                <label className={this.props.isError ? "ts-error" : {}}>
                    <span>{this.props.label}</span>
                    <input type="number"
                        placeholder="Pick a number greater than 0"
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