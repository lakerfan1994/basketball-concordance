import React from 'react';
import {shallow, mount} from 'enzyme';

import {EditPage} from './editpage';

describe('<EditPage />', () => {
    it('Renders without crashing', () => {
    	const dispatch = jest.fn();
        shallow(<EditPage  dispatch={dispatch} />);
    });
})