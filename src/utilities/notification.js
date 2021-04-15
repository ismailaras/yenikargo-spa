import {toast} from 'react-toastify';

const POSITION = toast.POSITION.TOP_RIGHT

export const success = message => {
    toast.success(message, {
        position: POSITION
    });
}

export const error = message => {
    toast.error(message, {
        position: POSITION
    });
}

export const warn = message => {
    toast.warn(message, {
        position: POSITION
    });
}

export const info = message => {
    toast.info(message, {
        position: POSITION
    });
}
