import React from 'react';
import {shallow, mount} from 'enzyme';

import {BackButton} from './backbutton';

describe('<BackButton />', () => {
    it('Renders without crashing', () => {
    	const dispatch = jest.fn();
        shallow(<BackButton  dispatch={dispatch} />);
    });
})