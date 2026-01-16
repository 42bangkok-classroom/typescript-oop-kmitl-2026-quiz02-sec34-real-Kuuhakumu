import axios from 'axios';
type newUser = {
  name: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  } | null;
  phone: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
const fetch = async () => {
  const res = await axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data)
    .catch((error) => console.error('Error fetching data:', error));
  return res;
}
export function addUser(newUser: newUser | null) {
  return fetch().then((users) => {
    const Post = axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newUser
    );
    return Post;
  });
}
