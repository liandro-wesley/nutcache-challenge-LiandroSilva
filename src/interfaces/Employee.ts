type Gender = {
    genderIdentity: 'F' | 'M' | 'O'
}


export default interface Employees {
    _id?: string;
    name: string;
    email: string;
    cpf: number | string;
    team: string;
    gender: string;
    birthDate: string;
    startDate: string;
}