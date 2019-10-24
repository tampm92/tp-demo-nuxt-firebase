<template>
  <div class="h-100">
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
