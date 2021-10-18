import { cpf } from 'cpf-cnpj-validator'; 


export const isEmail = (email: string) => {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(validEmail.test(email)) {
        return true;
    } else {
        return false;
    }
}

export const isCPF = (value: string) => {
    if(cpf.isValid(value) === false) return false;
    return true;
}