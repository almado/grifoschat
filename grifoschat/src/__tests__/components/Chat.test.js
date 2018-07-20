import React from 'react';
import { shallow } from 'enzyme';

import Chat from '../../components/Chat';

describe('Message', () => {
    let wrapper;
    const INITIAL_STATE = {
        from: {
            avatar: './assets/maria-avatar.jpg',
            messages: [
                {
                    sender: 'Maria',
                    text: 'E ae... como vais!?',
                    timestamp: 1531863103149
                }
            ]
        },
        to: {
            messages: [
                {
                    sender: 'João',
                    text: 'E aewww maria! Foi mal a demora...',
                    timestamp: 1531864333332
                },
                {
                    text: 'Fala o que manda!',
                    timestamp: 1531864381645
                }
            ]
        }
    };

    beforeEach(() => {
        wrapper = shallow(<Chat messages={INITIAL_STATE} />).props();

    })

    it('Rendering simple component', () => {
        expect(Chat).toMatchSnapshot();
    });
});