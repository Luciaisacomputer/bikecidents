<template>
  <div class="bi-incident-list">
    <div
      v-for="incident in incidents"
      :key="incident.id"
    >
    <incident :incident="incident" name=""></incident>
    </div>
  </div>
</template>

<script>

import Incident from '@/components/Incident.vue';

export default {
  name: 'incident-list',
  components: {
    Incident,
  },
  props: {
    incidents: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/IncidentList.scss";
</style>
