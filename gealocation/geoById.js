
const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=';
const token = '4531b346e81d7b1283df0942d77aeb766e7192d7';
const query = '94.233.248.96';

const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${  token}`
    }
}


const findById = (ip) => fetch(url + ip, options);

export default findById;
