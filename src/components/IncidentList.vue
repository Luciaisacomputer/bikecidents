<template>
  <div>
    <div
      v-for="incident in incidents"
      v-bind="{incident}"
      :key="incident.id"
    >
      <slot v-bind="incident"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'incident-list',
  props: {
    incidents: {
      type: Array,
      required: true,
    },
  },
};
</script>
