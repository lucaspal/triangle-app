import React from 'react';
import { configure, shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});