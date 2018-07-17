import { SEND_MESSAGE } from './types';

const mariaMessages = [
    'Não estou te entendendo',
    'Vamos falar de outra coisa',
    'Tente entender o meu lado...',
    'Detesto bolo de abacaxi',
    'O Vasco vai ser vice novamente esse ano',
    'Vamos mudar de assunto?',
    'Talvez',
    'Vou pensar a respeito...',
    'Kkkkkkkkkk'
];

export const sendMessage = ({ message }) => {
    
    return (dispatch) => {

        dispatch({
            type: SEND_MESSAGE,
            payload: { message, sender: 'João' }
        });

        setTimeout(() => {
            dispatch({ 
                type: SEND_MESSAGE,
                payload: { message: (mariaMessages[Math.floor(Math.random() * 9) + 1 ] || "Não sei o que dizer"), sender: 'Maria' }
            });
        }, 1500);
    };
};
