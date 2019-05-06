import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import 'jest-enzyme';

describe('Smoke test', function() {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('renders all text', () => {
        const wrapper = shallow(<App />);
        const allText = "NO DB ENTRIES YETADDDELETEUPDATE";
        expect(wrapper).toIncludeText(allText);
    });

    it('this test should fail', () => {
        const wrapper = shallow(<App />);
        const allText = "FAIL";
        expect(wrapper).toIncludeText(allText);
    });
});
