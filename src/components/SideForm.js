import React, { Component } from 'react';
import Side from './Side';

class SideForm extends Component {
    state = {
        side1: 0,
        side2: 0,
        side3: 0,
        isError: false,
        isSubmitted: false,
    }

    TRIANGLE_TYPES = Object.freeze({
        ISOSCELES: "ISOSCELES",
        SCALENE: "SCALENE",
        EQUILATERAL: "EQUILATERAL",
    })

    onSide1Changed = (value) => {
        this.setState({ side1: value, isError: this.isATriangle() })
    }

    onSide2Changed = (value) => {
        this.setState({ side2: value, isError: this.isATriangle() })
    }

    onSide3Changed = (value) => {
        this.setState({ side3: value, isError: this.isATriangle() })
    }

    // Triangle inequality rule.
    isATriangle = () => {
        return Boolean(this.state.side1 + this.state.side2 < this.state.side3);
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
        return this.state.isError || this.state.isSubmitted || this.state.side1 === 0 || this.state.side2 === 0 || this.state.side3 === 0;
    }

    resetForm = () => {
        return this.setState({
            side1: '',
            side2: '',
            side3: '',
            isError: false,
            isSubmitted: false,
        })
        
    }

    render() {
        return (
            <form ref="sides-form" data-ts="Form" onSubmit={this.onFormSubmitted} className="form-style">
                <fieldset>
                    <Side id="side1" label="Side 1" isError={this.state.isError} onValueChanged={this.onSide1Changed} />
                    <Side id="side2" label="Side 2" isError={this.state.isError} onValueChanged={this.onSide2Changed} />
                    <Side id="side3" label="Side 3" isError={this.state.isError} onValueChanged={this.onSide3Changed} />
                    {this.state.isError && /* Shows error message  */
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