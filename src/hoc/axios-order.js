import axios  from 'axios';
const instance=axios.create({
    baseURL:'https://my-burger241.firebaseio.com/'
})
export default instance;