import React from 'react';
import { configure, shallow } from 'enzyme';
import App from '../App';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});