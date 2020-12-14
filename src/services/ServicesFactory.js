import IncidentsService from './IncidentsService';

const services = {
  incidents: IncidentsService,
};

export default {
  get: (name) => services[name],
};
