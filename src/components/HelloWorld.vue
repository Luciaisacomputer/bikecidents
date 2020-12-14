<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {

  },
  mounted() {
    axios.get('https://bikewise.org:443/api/v2/incidents?page=1&proximity=45.521728%2C-122.67326&proximity_square=100').then((response) => (response));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/components/HelloWorld.scss";
</style>
