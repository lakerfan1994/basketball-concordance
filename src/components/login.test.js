import React from 'react';
import {shallow, mount} from 'enzyme';

import {Login} from './login';

describe('<Login />', () => {
    it('Renders without crashing', () => {
    	const dispatch = jest.fn();
        shallow(<Login  dispatch={dispatch} />);
    });
})