import React, { Component } from 'react';
import Side from './Side';

class SideForm extends Component {
    state = {
        side1: '',
        side2: '',
        side3: '',
        isTriangle: true,
        isSubmitted: false,
    }

    // enum
    TRIANGLE_TYPES = Object.freeze({
        ISOSCELES: "ISOSCELES",
        SCALENE: "SCALENE",
        EQUILATERAL: "EQUILATERAL",
    })

    onSide1Changed = (value) => {
        this.setState({ side1: value, isTriangle: this.isTriangle(value, this.state.side2, this.state.side3), isSubmitted: false })
    }

    onSide2Changed = (value) => {
        this.setState({ side2: value, isTriangle: this.isTriangle(this.state.side1, value, this.state.side3), isSubmitted: false })
    }

    onSide3Changed = (value) => {
        this.setState({ side3: value, isTriangle: this.isTriangle(this.state.side1, this.state.side2, value), isSubmitted: false })
    }

    // Triangle inequality rule.
    isTriangle = (len1, len2, len3) => {
        return len1 + len2 > len3;
    }

    getTriangleType = () => {
        const uniqueSides = [...new Set([this.state.side1, this.state.side2, this.state.side3])]

        if (uniqueSides.length === 3) {
            return this.TRIANGLE_TYPES.SCALENE;
        }
        if (uniqueSides.length === 2) {
            return this.TRIANGLE_TYPES.ISOSCELES;
        } else {
            return this.TRIANGLE_TYPES.EQUILATERAL;
        }
    }

    getOutputString = () => {
        const triangleType = this.getTriangleType();
        const prefix = "Based on the sides specified, the triangle is "

        if (triangleType === this.TRIANGLE_TYPES.EQUILATERAL) {
            return prefix + "equilateral.";
        }
        if (triangleType === this.TRIANGLE_TYPES.ISOSCELES) {
            return prefix + "isosceles.";
        }
        if (triangleType === this.TRIANGLE_TYPES.SCALENE) {
            return prefix + "scalene."
        }
    }

    onFormSubmitted = () => {
        this.getTriangleType();
        this.setState({ isSubmitted: true });
    }

    isDisabled = () => {
        return !this.state.isTriangle || this.state.isSubmitted 
        || this.state.side1 === 0 || this.state.side2 === 0 || this.state.side3 === 0 // Is not possible to make a triangle with any of the sides 0
        || this.state.side1 === "" || this.state.side2 === "" || this.state.side3 === ""; // Disabled on any of the fields empty
    }

    resetForm = () => {
        return this.setState({
            side1: '',
            side2: '',
            side3: '',
            isTriangle: true,
            isSubmitted: false,
        })
    }

    render() {
        return (
            <form ref="sides-form" data-ts="Form" onSubmit={this.onFormSubmitted} className="form-style">
                <fieldset>
                    <Side id="side1" value={this.state.side1} label="Side 1" isError={!this.state.isTriangle} onValueChanged={this.onSide1Changed} />
                    <Side id="side2" value={this.state.side2} label="Side 2" isError={!this.state.isTriangle} onValueChanged={this.onSide2Changed} />
                    <Side id="side3" value={this.state.side3} label="Side 3" isError={!this.state.isTriangle} onValueChanged={this.onSide3Changed} />
                    {!this.state.isTriangle && /* Shows error message  */
                        <dl className="ts-errors">
                            <dt>It is not possible to have a triangle with these sides.</dt>
                            <dd>The sides sizes do not satisfy the triangle inequality rule.</dd>
                            <dd>Triangle inequality rule: side1 + side2 > side3</dd>
                        </dl>
                    }
                    <div className="buttons-section">
                        <button data-ts="Button" className="ts-primary" type="submit" disabled={this.isDisabled()}>
                            <span>Calculate</span>
                        </button>
                        <button data-ts="Button" className="ts-secondary" onClick={() => this.resetForm()}>
                            <span>Reset</span>
                        </button>
                    </div>
                    {this.state.isSubmitted &&
                        <div data-ts="Note">
                            <p>{this.getOutputString()}</p>
                        </div>
                    }
                </fieldset>
            </form >
        )
    }
}

export default SideForm;