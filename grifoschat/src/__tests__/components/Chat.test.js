import React from 'react';
import { shallow, mount } from 'enzyme';

import Chat from '../../components/Chat';
import { wrap } from 'module';

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
        wrapper = shallow(<Chat messages={INITIAL_STATE} />);
    })

    it('Rendering match snapshot', () => {
        expect(Chat).toMatchSnapshot();
    });

    describe('Rendering props correctly', () => {
        let component;
        beforeEach(() => {
            component = mount(<Chat messages={INITIAL_STATE} />);
        });

        it('Props must be defined', () => {
            expect(component.props().messages).toBeDefined();
        });

        it('Rendering sender with value', () => {
            expect(component.props().messages.from.messages[0].sender).toBe('Maria');
            expect(component.props().messages.to.messages[0].sender).toBe('João');
        });

        it('Text should not be null or empty', () => {
            expect(component.props().messages.from.messages[0].text.length).toBeGreaterThanOrEqual(1);
            expect(component.props().messages.to.messages[0].text.length).toBeGreaterThanOrEqual(1);
        });
    });
});