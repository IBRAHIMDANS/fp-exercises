const address = (
    number: number = 6,
    street: string = 'faubourg',
    code: number = 75000,
    city: string = 'paris',
    country: string = 'france'
) => {
    return `${String(number)} ${street}
 ${code} - ${city.toUpperCase()}
${country.toUpperCase()}`;
};

const fullAddress = (
    number: number,
    street: string,
    code: number,
    city: string
) => address(number, street, code, city,'france');
