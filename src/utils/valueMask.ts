import MaskInterface from "../interfaces/Masks";

function CPF(value: string) {
    const cleanCPF = (value || '').replace(/\D/g, '');
    let cpfFormat = cleanCPF.length > 11 ? cleanCPF.slice(0, 11) : cleanCPF;

    return cpfFormat
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
};

function MonthAndYear(value: string) {
    const clearMonthAndYear = (value || '').replace(/\D/g, '');
    let monthAndYearFormat = clearMonthAndYear.length > 6 ? clearMonthAndYear.slice(0, 6) : clearMonthAndYear;

    return monthAndYearFormat
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2");
}


const valueMask = ({mask, value}: MaskInterface) => {
    if(mask === "CPF") {
        return CPF(value);
    } else if(mask === 'MonthAndYear') {
        return MonthAndYear(value);
    } else if(mask === 'WithoutMask') {
        return value;
    }
}

export default valueMask;