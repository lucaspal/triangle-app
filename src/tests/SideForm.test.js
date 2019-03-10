import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import SideForm from '../components/SideForm';

describe('SideForm component tests', () => {
    it('renders without crashing', () => {
        shallow(<SideForm />);
    });

    it('is not a triangle if it does not satisfy the triangle inequality rule', () => {
        const shallowWrapper = mount(<SideForm />);
        shallowWrapper.setState({ side1: 2, side2: 1, side3: 1000 });
        const sideFormInstance = shallowWrapper.instance();

        expect(sideFormInstance.isTriangle()).toBeFalsy();
    });

    it('is a triangle if it satisfies the triangle inequality rule', () => {
        const shallowWrapper = mount(<SideForm />);
        shallowWrapper.setState({ side1: 4, side2: 5, side3: 3 });
        const sideFormInstance = shallowWrapper.instance();

        expect(sideFormInstance.isTriangle()).toBeFalsy();
    });

    it('is disabled if it does not satisfy the triangle inequality rule', () => {
        const shallowWrapper = mount(<SideForm />);
        shallowWrapper.setState({ side1: 2, side2: 1, side3: 1000 });
        const sideFormInstance = shallowWrapper.instance();
        shallowWrapper.state({ isTriangle: sideFormInstance.isTriangle() });
        expect(sideFormInstance.isDisabled()).toEqual(false);
    });

    it('is disabled if it is not a triangle', () => {
        const shallowWrapper = mount(<SideForm />);
        shallowWrapper.setState({ isTriangle: false });
        const sideFormInstance = shallowWrapper.instance();

        expect(sideFormInstance.isDisabled()).toEqual(true);
    });

    it('is not disabled if it is a triangle', () => {
        const shallowWrapper = mount(<SideForm />);
        const sideFormInstance = shallowWrapper.instance();
        shallowWrapper.setState({
            isTriangle: true,
            side1: 2,
            side2: 2,
            side3: 3
        });

        expect(sideFormInstance.isDisabled()).toEqual(false);
    });
});