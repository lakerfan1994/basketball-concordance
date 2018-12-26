import React from 'react';
import {shallow, mount} from 'enzyme';

import {Signup} from './signup';

describe('<Signup />', () => {
    it('Renders without crashing', () => {
    	const dispatch = jest.fn();
        shallow(<Signup dispatch={dispatch} />);
    });
})