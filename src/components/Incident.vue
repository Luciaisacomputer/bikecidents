<template>
  <div class="bi-incident">
    <div class="bi-incident-title">
      <h2>{{incident.title}}</h2>
    </div>
    <div class="bi-incident-descr">
      {{incident.description}}
    </div>
    <div class="bi-incident-type">
      {{incident.type}}
    </div>
    <ul>
    <li>{{incident.address}}</li>
    <li>{{incident.occurred_at}}</li>
    <li>{{incident.updated_at}}</li>
    <li><a v-bind:href="incident.url">View</a></li>
    <li><img v-bind:src="incident.media.image_url_thumb ? incident.media.image_url_thumb : ''"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    incident: Object,
    name: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/components/Incident.scss";
</style>
