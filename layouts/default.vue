<template>
  <b-container class="mt-4">
    <Loading :loading="isLoading"/>
    <nuxt />
  </b-container>
</template>

<script>
  import {
    mapState
  } from "vuex";
  import {
    Loading
  } from '@/containers'

  export default {
    name: 'default',
    components: {
      Loading
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapState({
        isLoading: state => state.isLoading
      })
    }
  }
</script>
