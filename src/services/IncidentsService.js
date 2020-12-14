import ServicesBase from './ServicesBase';

const resource = '/api/v2/incidents';
export default {
  get() {
    return ServicesBase.get(`${resource}`);
  },
};
