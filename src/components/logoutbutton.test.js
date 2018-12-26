import React from 'react';
import {shallow, mount} from 'enzyme';

import {LogoutButton} from './logoutbutton';

describe('<LogoutButton />', () => {
    it('Renders without crashing', () => {
    	const dispatch = jest.fn();
        shallow(<LogoutButton  dispatch={dispatch} />);
    });
})