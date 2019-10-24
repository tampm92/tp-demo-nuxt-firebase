<template>
  <div>
    <Loading :loading="isLoading"/>
    <nuxt />
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  import {
    Loading
  } from '@/containers'

  export default {
    name: 'clean',
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
