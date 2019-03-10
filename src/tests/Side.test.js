import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Side from '../components/Side';

describe('Side component tests', () => {
    it('renders without crashing', () => {
        shallow(<Side id="test" label="label" onValueChanged={() => { }} />);
    });

    it('Sets label correctly', () => {
        const shallowWrapper = shallow(
            <Side
                id="test"
                label="label"
                onValueChanged={() => { }}
            />);
        const sideInstance = shallowWrapper.instance();
        expect(sideInstance.props.label).toEqual('label');
    });

    it('Sets id correctly', () => {
        const shallowWrapper = mount(
            <Side
                id="test"
                label="label"
                onValueChanged={() => { }}
            />);
        const sideInstance = shallowWrapper.instance();
        
        expect(sideInstance.props.id).toEqual('test');
    });
});