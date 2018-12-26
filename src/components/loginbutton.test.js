import React from 'react';
import {shallow, mount} from 'enzyme';

import {LoginButton} from './loginbutton';

describe('<LoginButton />', () => {
    it('Renders without crashing', () => {
    	const dispatch = jest.fn();
        shallow(<LoginButton  dispatch={dispatch} />);
    });
})