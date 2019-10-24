<template>
  <c-dropdown right no-caret>
    <template slot="header">
      <img
        :src="authUser.photoURL"
        class="img-avatar"
        :alt="authUser.email" />
    </template>\
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>
      <b-dropdown-item><i class="fa fa-bell" /> Updates
        <b-badge variant="info">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-envelope" /> Messages
        <b-badge variant="success">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-tasks" /> Tasks
        <b-badge variant="danger">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-comments" /> Comments
        <b-badge variant="warning">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-header
        tag="div"
        class="text-center">
        <strong>Settings</strong>
      </b-dropdown-header>
      <b-dropdown-item><i class="fa fa-user" /> Profile</b-dropdown-item>
      <b-dropdown-item><i class="fa fa-wrench" /> Settings</b-dropdown-item>
      <b-dropdown-item><i class="fa fa-dollar-sign" /> Payments
        <b-badge variant="secondary">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-file" /> Projects
        <b-badge variant="primary">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item><i class="fa fa-user-shield" /> Lock Account</b-dropdown-item>
      <b-dropdown-item @click="signOut"><i class="fa fa-lock" /> Logout</b-dropdown-item>
    </template>
  </c-dropdown>
</template>

<script>
import {
    mapState,
    mapActions
  } from "vuex";

import { cDropdown } from '@/components'

export default {
  name: 'HeaderDropdownAccnt',
  components: {
    cDropdown
  },
  data: () => {
    return { itemsCount: 42 }
  },
  computed: {
    ...mapState({
      authUser: state => state.auth.authUser
    })
  },
  methods: {
    signOut () {
      this.$store.dispatch('auth/signOut').then(() => {
        this.$router.push('/');
      }).catch((e) => {
        console.log(e.message || e);
      })
    }
  }
}
</script>
