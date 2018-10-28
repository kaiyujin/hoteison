<template>
  <div>
    <v-btn
      color="primary"
      @click="login">Google Login</v-btn>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'Login',
  methods: {
    login() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  }
}
</script>
