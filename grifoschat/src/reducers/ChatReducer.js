import { SEND_MESSAGE } from '../actions/types';

const INITIAL_STATE = {
    from: {
        user: 'Maria',
        avatar: './assets/maria-avatar.jpg',
        messages: [
            {
                text: 'Hi! My friend! How are you?!',
                timestamp: 1531863103149
            }
        ]
    },
    to: {
        user: 'João',
        messages: [
            {
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

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            var s = { ... state };
            s.to.messages.push({ text: action.payload.message, timestamp: new Date().getTime() });
            return s;
        default:
            return state;
    }
};