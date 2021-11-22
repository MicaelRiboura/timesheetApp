import { notifyError } from './notify.utils';

const validateEmptyInput = (name, value) => {
    if(value == '') {
        notifyError(`O campo ${name} é obrigatório!`);
        return false;
    }
    return true;
}

export { validateEmptyInput };