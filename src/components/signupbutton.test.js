import React from 'react';
import {shallow, mount} from 'enzyme';

import {SignupButton} from './signupbutton';

describe('<SignupButton />', () => {
    it('Renders without crashing', () => {
    	const dispatch = jest.fn();
        shallow(<SignupButton dispatch={dispatch} />);
    });
})