<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        <Login
          v-if="!isLogin"/>
        <Logout
          v-if="isLogin"
          :user="userData" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Login from '~/components/Login.vue'
import Logout from '~/components/Logout.vue'
import firebase from '@/plugins/firebase'

export default {
  components: {
    Login,
    Logout
  },
  asyncData() {
    return {
      isLogin: false,
      userData: null
    }
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        this.isLogin = true
        this.userData = user
      } else {
        this.isLogin = false
        this.userData = null
      }
    })
  }
}
</script>
