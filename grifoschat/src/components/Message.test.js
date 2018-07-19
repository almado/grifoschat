import React from 'react';
import { shallow } from 'enzyme';

import Message from './Message';

describe('Message', () => {
    test('Rendering simple component', () => {
        const wrapper = shallow(
            <Message />
        );

        expect(wrapper.find('div').text()).toEqual('teste');
    });
});