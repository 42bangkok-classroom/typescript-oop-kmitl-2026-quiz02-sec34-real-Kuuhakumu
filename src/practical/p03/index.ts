import axios from 'axios';
const fetch = async () => {
    const res = await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
        .catch((error) => console.error('Error fetching data:', error));
    return res;
}
export function filterUserById(id) {
}
