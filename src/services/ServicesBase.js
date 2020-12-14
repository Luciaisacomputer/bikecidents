import axios from 'axios';

const baseDomain = 'https://bikewise.org:443'; // https://bikewise.org:443/api/v2/incidents?page=1&proximity=45.521728%2C-122.67326&proximity_square=100
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
});
