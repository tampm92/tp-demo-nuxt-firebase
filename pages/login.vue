<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1 class="mb-5">Sign In with Google</h1>
                  <b-row>
                    <b-col cols="6">
                      <b-button @click="googleSignUp" variant="primary" class="px-4">Login with Google</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: "clean",
  data() {
    return {
      formEmail: '',
      formPassword: ''
    };
  },
  computed: {
  },
  methods: {
    emailLogin () {
      this.$store.dispatch('auth/signInWithEmail', {
        email: this.formEmail,
        password: this.formPassword
      }).then(() => {
        this.formEmail = ''
        this.formPassword = ''
      }).catch((e) => {
        console.log(e.message);
      })
    },
    googleSignUp () {
      this.$store.dispatch('auth/signInWithGoogle').then(() => {
        console.log('inside then statement on login');
      }).catch((e) => {
        console.log(e.message);
      })
    }
  }
};
</script>
