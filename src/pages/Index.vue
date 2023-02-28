<template>
  <q-page>
    <home-component></home-component>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeComponent from 'components/CompositionComponent.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: { HomeComponent },
  methods: {}
})
</script>
