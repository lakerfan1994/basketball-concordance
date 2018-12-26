import React from 'react';
import {shallow, mount} from 'enzyme';

import {ArticleStub} from './articlestub';

describe('<ArticleStub />', () => {
    it('Renders without crashing', () => {
    	const dispatch = jest.fn();
        shallow(<ArticleStub  dispatch={dispatch} />);
    });
})