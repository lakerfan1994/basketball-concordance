import React from 'react';
import {shallow, mount} from 'enzyme';

import {SearchBar} from './searchbar';

describe('<SearchBar />', () => {
    it('Renders without crashing', () => {
    	const dispatch = jest.fn();
        shallow(<SearchBar dispatch={dispatch} />);
    });
})