import { SEND_MESSAGE } from '../actions/types';

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

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            var s = { ... state };

            switch(action.payload.sender){
                case 'João':
                    s.to.messages.push({ text: action.payload.message, timestamp: new Date().getTime(), sender: action.payload.sender });
                    break;
                case 'Maria':
                    s.from.messages.push({ text: action.payload.message, timestamp: new Date().getTime(), sender: action.payload.sender });
                    break;
            }

            return s;
        default:
            return state;
    }
};