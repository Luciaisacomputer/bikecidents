<template>
  <div class="home">
    <incident-list
      v-if="!isLoading"
      :incidents="computedIncidents"
    >
    </incident-list>
  </div>
</template>

<script>
import IncidentList from '@/components/IncidentList.vue';
import ServicesFactory from '@/services/ServicesFactory';

const Incidents = ServicesFactory.get('incidents');

export default {
  name: 'Home',
  components: {
    IncidentList,
  },
  data() {
    return {
      isLoading: false,
      incidents: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.isLoading = true;
      const { data } = await Incidents.get();
      this.isLoading = false;
      this.incidents = data.incidents;
    },
  },
  computed: {
    computedIncidents() {
      return this.incidents.slice(0, 10);
    },
  },
};
</script>
