import React from 'react';
import { shallow } from 'enzyme';

import Message from '../../components/Message';

describe('Message', () => {
    test('Rendering simple component', () => {
        const wrapper = shallow(<Message />);

        console.warn(wrapper);
        
        expect(wrapper.find('div').text()).toEqual('teste');
    });
});