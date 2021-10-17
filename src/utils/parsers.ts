export const toMonthAndYear = (value: string) => {
    if (!value.match(/^(\d{2})\/(\d{4})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "$1/$2");
    }
    return value;
}